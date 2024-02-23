import "./style.scss"

import { RenderPage } from "./page";
import { RenderNavigation } from "./navigation";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = RenderNavigation() + RenderPage();
