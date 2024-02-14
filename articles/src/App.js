import './App.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import FloatingButton from './components/FloatingButton';

function App() {

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
