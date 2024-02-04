import {useContext} from "react";
import {LoginContext} from "../store/LoginContextProvider";

export default function Header() {
  const {setLogin} = useContext(LoginContext);
  return <>
    <header className={'bg-[#303030] text-white px-20 text-center flex'}>
      <h1 className={'grow'}>나만의 블로그</h1>
      <button onClick={() => setLogin(false)}>로그아웃</button>
    </header>
  </>;
}