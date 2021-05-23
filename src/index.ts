import { User } from "./models/User";

const user = new User({ name: "Wolf", age: 9 });

user.on("change", () => console.log("Changing"));
user.trigger("change");
console.log(user.get("name"));
