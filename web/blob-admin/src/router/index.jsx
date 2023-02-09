import Router from "oh-router";
import Login from "../pages/login";
import Home from "../pages/Home";
import { LoginCheckMiddleware } from "./middlewares/loginCheck";

export const router = new Router({
  middlewares: [new LoginCheckMiddleware()],
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ],
});
