import "./style.scss"

import { RenderPage } from "./page";
import { RenderNavigation } from "./navigation";
import { BindWelcome } from "./welcome";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = RenderNavigation() + RenderPage();

BindWelcome();
