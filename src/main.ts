import "./style.scss"

import { RenderPage } from "./page";
import { RenderNavigation } from "./navigation";
import { BindWelcome } from "./welcome";
import { BindResult } from "./result";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = RenderNavigation() + RenderPage();

const params = new URLSearchParams(window.location.search);
const asset = params.get('asset');
asset ? BindResult(asset) : BindWelcome();
