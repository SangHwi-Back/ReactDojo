import { createBrowserRouter } from "react-router-dom";
import IntroPage from "./IntroPage";
import SelectConditions from "./SelectConditions";
import SelectCard from "./SelectCard";
import ResultBoard from "./ResultBoard";

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
    path: "/results",
    element: <ResultBoard />,
  },
]);

export default router;