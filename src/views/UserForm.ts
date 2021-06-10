import { View } from "./View";

interface EventsMap {
  [key: string]: () => void;
}

export class UserForm extends View {
  eventsMap(): EventsMap {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");

    if (input) {
      const name = input.value;

      this.model.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <div>User Name: ${this.model.get("name")}</div>
      <div>User Age: ${this.model.get("age")}</div>
      <input value="${this.model.get("name")}" />
      <button class="set-name">Change Name</button>
      <button class="set-age">Set Random Age</button>
    </div>
    `;
  }
}
