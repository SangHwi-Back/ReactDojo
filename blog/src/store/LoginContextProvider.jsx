import {createContext, useState} from "react";

export const LoginContext = createContext({});

export default function LoginContextProvider({children}) {
  const [isLogin, setLogin] = useState(false);

  return <LoginContext.Provider value={{isLogin, setLogin}}>
    {children}
  </LoginContext.Provider>
}