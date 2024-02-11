import "./App.css";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <h1 className="m-4 mb-8">Cool SideBar</h1>
      <div className="flex ml-3">
        <SideBar className="flex-none mr-8 " />
        <RouterProvider router={router}>
          <MainComponent className="flex-initial" />
        </RouterProvider>
      </div>
    </>
  );
}

export default App;
