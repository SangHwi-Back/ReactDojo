import {useContext, useState} from "react";
import {LoginContext} from "../store/LoginContextProvider";

function InputField({title, children}) {
  return <p className={'m-2 flex'}>
    <label className={'grow mr-2'}>{title}</label>
    {children}
  </p>
}

export default function LoginArea() {
  const {setLogin} = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    setLogin(email === 'tester' && password === '1234');
  }

  return <div className={'bg-[#333] ml-2'}>
    <h2 className={'bg-white m-1'}>Please Login</h2>
    <InputField title={'Email'} isPassword={false}>
      <input type="text" onChange={e => setEmail(e.target.value)}/>
    </InputField>
    <InputField title={'Password'} isPassword={true}>
      <input type="password" onChange={e => setPassword(e.target.value)}/>
    </InputField>
    <button className={'ml-2 mb-2 bg-white'} onClick={handleLogin}>Login</button>
  </div>
}