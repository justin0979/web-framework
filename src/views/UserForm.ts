interface EventsMap {
  [key: string]: () => void;
}

export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): EventsMap {
    return {
      "click:button": this.onButtonClick,
      "mouseover:h1": this.onHeaderMouseover,
    };
  }

  onHeaderMouseover(): void {
    console.log("mouse over");
  }

  onButtonClick(): void {
    console.log("Hi there");
  }

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <input />
      <button>Click Me</button>
    </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment
        .querySelectorAll(selector)
        .forEach((element) => {
          element.addEventListener(
            eventName,
            eventsMap[eventKey],
          );
        });
    }
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
