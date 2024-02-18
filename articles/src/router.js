import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Articles from "./components/Articles";
import Login from "./components/Login";
import InsertArticles from "./components/InsertArticles";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/articles",
        element: <Articles />,
    },
    {
        path: "/insertArticles",
        element: <InsertArticles />,
    },
    {
        path: "/catchAll:",
        element: <NotFound />,
    }
]);

export default router;