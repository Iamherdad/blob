import Router from "oh-router";
import Login from "../pages/login";
import Home from "../pages/Home";
import CreateArticle from "../pages/createArticle";
import { LoginCheckMiddleware } from "./middlewares/loginCheck";

export const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "createArticle",
        element: <CreateArticle />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export const router = new Router({
  middlewares: [new LoginCheckMiddleware()],
  routes: routes,
});
