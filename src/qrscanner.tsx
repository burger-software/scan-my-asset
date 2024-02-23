import { RenderElement } from "./render";
import { BindResult } from "./result";
import { RenderView } from "./utils";
import { Html5QrcodeScanner } from "html5-qrcode";

export function BindQrScanner() {
    RenderView(
        <div class="row">
            <div class="col">
                <div id="qr-reader" width="100%"></div>
            </div>
        </div>
    );
    const scanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: {width: 350, height: 350} }, false);
    scanner.render(
        (text, _) => {
            scanner.clear();
            BindResult(text);
        }, 
        undefined,     // no error callback, it is called again and again if there is no QR code on view
    );
}