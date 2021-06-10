export class HtmlRenderer {
  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.innerHTML = "";
    this.parent.append(templateElement.content);
  }
}
