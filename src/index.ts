import { Collection } from "./models/Collection";

const rootDiv = document.getElementById("root");
rootDiv.style.backgroundColor = "#333";
rootDiv.style.height = "100vh";
rootDiv.style.color = "#aaa";

const collection = new Collection(
  "http://localhost:3000/users",
);

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
