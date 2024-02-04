import Header from "./components/Header";
import MainContents from "./components/MainContents";
import LoginContextProvider from "./store/LoginContextProvider";

function App() {
  return (
    <LoginContextProvider>
      <Header/>
      <MainContents/>
      <footer>
        &copy; 2024 나만의 블로그
      </footer>
    </LoginContextProvider>
  );
}

export default App;
