export function RenderView(content: string) {
    document.getElementById("content")!.innerHTML = content;
}
export function OnClick(id: string, action: () => void) {
    document.getElementById(id)!.addEventListener("click", action);
}