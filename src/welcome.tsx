import { BindQrScanner } from "./qrscanner";
import { RenderElement } from "./render";
import { OnClick, RenderView } from "./utils";

export function BindWelcome() {
    RenderView(
        <div class="d-grid gap-4">
            <a href="#" id="scan-button" class="btn btn-lg btn-primary">Scan QR Code</a>
        </div>);
    OnClick("scan-button", () => BindQrScanner());
}