import { RenderElement } from "./render";

export function RenderPage() {
    return <div class="container-fluid">
        <h1>Scan My Asset</h1>
        <p>Application can scan assets using QR codes and display information downloaded from the service API.</p>
        <div id="content"></div>
    </div>
}