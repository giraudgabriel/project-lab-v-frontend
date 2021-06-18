import Main from "~/pages";
import Users from "~/pages/users";
import User from "~/pages/user";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/user",
    component: User,
    roles: ["admin"],
  },
  {
    path: "/users",
    component: Users,
    roles: ["admin", "policia"],
  },
];

export default routes;
