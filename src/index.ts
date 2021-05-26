import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

const rootDiv = document.getElementById("root");
rootDiv.style.backgroundColor = "#333";
rootDiv.style.height = "100vh";
rootDiv.style.color = "#aaa";

const collection = new Collection<User, UserProps>(
  "http://localhost:3000/users",
  (json: UserProps) => User.buildUser(json),
);

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
