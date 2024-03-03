import { createBrowserRouter } from "react-router-dom";
import IntroPage from "./IntroPage";
import SelectConditions from "./SelectConditions";
import SelectCard from "./SelectCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
  },
  {
    path: "/selectTheme",
    element: <SelectConditions />,
  },
  {
    path: "/selectCard/:sequence",
    element: <SelectCard />,
  },
  {
    path: "/result",
    element: <div>Result</div>,
  }
]);

export default router;