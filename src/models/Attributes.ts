export class Attributes<T> {
  constructor(private data: T) {}

  // The keys of an object can be a type (see Lecture 166)
  // K stands for KeyOfObject
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
