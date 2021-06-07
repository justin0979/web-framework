export class Attributes<T> {
  constructor(private data: T) {}

  // The keys of an object can be a type (see Lecture 166).
  // K stands for KeyOfObject.
  // 'K extends keyof T' sets up generic constraint, which
  // limits the types that K can be.
  // i.e. type of K can only be one of the keys of T
  // e.g. T is UserProps, then K can only specifically be
  // one of the following strings: "name", "age", "id"
  // only get("name"), get("age") or get("id") will work,
  // but get(5) or get("breed") will not
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
