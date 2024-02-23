import { BindQrScanner } from "./qrscanner";
import { RenderElement } from "./render";
import { OnClick, RenderView } from "./utils";

async function GetData(asset: string) {
    const link = `https://raw.githubusercontent.com/burger-software/scan-my-asset/main/data/${asset}.json`;
    const response = await fetch(link);
    const data = await response.json();
    const table = <div class="row">
        <div class="col">{JsonToTable(data)}</div>
    </div>
    const buttons = <div class="d-grid gap-4">
        <a href="#" id="mark-button" class="btn btn-lg btn-danger">Mark asset</a>
        <a href="#" id="scan-button" class="btn btn-lg btn-primary">Scan next</a>
    </div>

    RenderView(table + buttons);
    OnClick("scan-button", () => BindQrScanner());
    OnClick("mark-button", () => MarkAsset(asset));
}

function MarkAsset(asset: string) {
    alert("Asset " + asset + " is marked!");
}

function JsonToTable(data: any): string {
    return <table class="table">
        <thead>
            <tr>
                <th>Field</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            {Object.keys(data).map((key) => {
                return <tr>
                    <td>{key}</td>
                    <td>{data[key]}</td>
                </tr>
            }).join("")}
        </tbody>
    </table>
}

export function BindResult(text: string) {
    const parts = text.split("/");
    const asset = parts[parts.length - 1];
    RenderView(
        <div class="row">
            <div class="col">
                <i>Loading data for asset {asset}</i>
            </div>
        </div>
    );
    setTimeout(() => GetData(asset), 1000);  // wait a second to see the action...
}