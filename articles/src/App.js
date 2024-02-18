import './style/App.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import FloatingButton from './components/FloatingButton';

function App() {

  // const [isOpen, setIsOpen] = React.useState(false);
  // const headerClass = "flex justify-between p-4 bg-gray-200";
  // const sidebarClass = `fixed w-64 bg-gray-100 h-full transition-all duration-500 ${isOpen ? 'block' : 'hidden'}`;

  function navigateTo(path) {
    router.navigate(path);
  }

  return (
    <>
    <RouterProvider router={router}>
      <div className="">
        <header className="">
          Hello world
        </header>
      </div>
      <FloatingButton onClick={() => navigateTo('./login')}/>
    </RouterProvider>
    </>
  );
}

export default App;
