import { User } from "./models/User";

const user = new User({ name: "Wolf", age: 9 });

user.on("change", () => console.log("Changing"));

console.log(user.get("name"));
user.set({ name: "New Name" });
console.log(user.get("name"));
