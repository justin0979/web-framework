import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

const rootDiv = document.getElementById("root");
rootDiv.style.backgroundColor = "#333";
rootDiv.style.height = "100vh";
rootDiv.style.color = "#aaa";

const collection = User.buildUserCollection();

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
