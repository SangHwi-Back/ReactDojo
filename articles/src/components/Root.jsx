import FloatingButton from "./FloatingButton";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import ArticleContext from "./ArticleContext";
import data from "../resources/data.json";

export default function Root() {
  const [articles, setArticles] = useState(data.articles);
  const [isOpen, setIsOpen] = useState(false);
  const headerClass = "flex justify-between p-4 bg-gray-200";
  const sidebarClass = `bg-gray-100 h-full transition-all duration-500 ${
    isOpen ? "block" : "hidden"
  }`;
  const contentsClass = `w-full transition-all duration-500`;

  return (
    <>
      <ArticleContext.Provider value={{articles, setArticles}}>
      <header className={headerClass}>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close menu" : "Open menu"}
        </button>
        <div className="">
          <Link className="mr-4" to="/articles">Articles</Link>
          <Link to="./insertArticles">InsertArticles</Link>
        </div>
      </header>
      <div className={"flex h-screen"}>
        <div className={sidebarClass}>
          <h2 className="text-xl p-4">Sidebar</h2>
          <p className="px-4">This is a foldable sidebar</p>
        </div>
        <div className={contentsClass}>
          <Outlet />
        </div>
      </div>
      <FloatingButton />
      </ArticleContext.Provider>
    </>
  );
}
