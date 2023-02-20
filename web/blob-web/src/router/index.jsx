import { createBrowserRouter } from "react-router-dom";
import ArticleList from "../pages/articleList";
import Detail from "../pages/detail";
import Home from "../pages/home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <ArticleList />,
      },
      {
        path: "content/:id",
        element: <Detail />,
      },
    ],
  },
  // {
  //   path: "/content/:id",
  //   element: <Detail />,
  // },
]);

export default router;
