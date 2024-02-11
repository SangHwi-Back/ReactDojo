import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

export default function MainComponent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}