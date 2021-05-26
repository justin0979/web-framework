import { User } from "./models/User";

const rootDiv = document.getElementById("root");
rootDiv.style.backgroundColor = "#333";
rootDiv.style.height = "100vh";
rootDiv.style.color = "#aaa";

const user = User.buildUser({ id: 1 });

user.on("change", () => console.log(user));

user.fetch();
