import "./App.css";
import router from "./router";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import SideBar from "./components/SideBar";
import FloatingButtoin from "./components/FloatingButton";
import React from "react";
import Header from "./components/Header";

function App() {
  const [isOpen, toggleOpen] = useState(true);

  return (
    <React.StrictMode>
      <>
        <Header isOpen={isOpen} toggleSideBarOpen={toggleOpen}/>
        <div className="flex ml-3">
          <SideBar isOpen={isOpen} toggleOpen={() => toggleOpen(!isOpen)} />
          <RouterProvider router={router}>
            <MainComponent className="flex-grow"/>
          </RouterProvider>
        </div>
        <FloatingButtoin>=</FloatingButtoin>
      </>
    </React.StrictMode>
  );
}

export default App;
