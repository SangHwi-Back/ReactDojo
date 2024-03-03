import { createBrowserRouter } from "react-router-dom";
import IntroPage from "./IntroPage";
import SelectConditions from "./SelectConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
  },
  {
    path: "/selectTheme",
    element: <SelectConditions />,
  }
]);

export default router;