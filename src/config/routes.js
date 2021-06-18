import Main from "~/pages";
import Users from "~/pages/users";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/user",
    component: Users,
    roles: ["admin", "policia"],
  },
];

export default routes;
