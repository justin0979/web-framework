import { User } from "./models/User";

const user = new User({ name: "Wolf", age: 9 });

user.events.on("change", () => console.log("hi"));

user.events.trigger("change");
