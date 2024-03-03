import { createBrowserRouter } from "react-router-dom";
import IntroPage from "./IntroPage";
import SelectTheme from "./SelectTheme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
  },
  {
    path: "/selectTheme",
    element: <SelectTheme />,
  }
]);

export default router;