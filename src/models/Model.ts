import { AxiosPromise, AxiosResponse } from "axios";

type Callback = () => void;

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>,
  ) {}

  /**
   * Shortened syntax is very brittle.
   * Can only use this shortened syntax if class instances
   * are initialized in the constructor arguements and NOT
   * initialized in thes constructor body.
   * If class instances are initialized in the constructor
   * body, then the order of operations will have the
   * class instaneces intiated after this class' own
   * properties.
   * i.e.
   * class Model {
   *  events: Events;
   *
   *  constructor() {
   *   this.event = new Events()
   *  }
   *
   *  on = this.events.on;
   *
   * }
   *
   * will be compiled to something like:
   *
   * var Model = (function () {
   *  function Model(events) {
   *    this.on = this.events.on; // this.events is undefined
   *    this.events = events;     // this.events defined
   *  }
   * }())
   */
  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.get("id");

    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an id.");
    }

    this.sync
      .fetch(id)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger("save");
      })
      .catch(() => {
        this.trigger("error");
      });
  }
}
