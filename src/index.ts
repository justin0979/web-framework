import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const user = User.buildUser({ name: "Justin", age: 41 });
console.log(user.get("name"));

const userForm = new UserForm(
  document.getElementById("root"),
  user,
);

userForm.render();
