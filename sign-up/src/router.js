import { createBrowserRouter } from "react-router-dom";
import MainView from "./components/MainView";
import SignUp from "./components/SignUp";
import ErrorPage from "./errors/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/main-view",
    element: <MainView />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  }
]);

export default router;