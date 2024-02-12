import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonSubmit from "./ButtonSubmit";

export default function SignUp() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event, email, password) => {
    event.preventDefault();
    console.log(`email: ${email}, password: ${password}`);
    if (email === 'tester' && password === '1234') {
      navigate("/main-view");
    } else {
      alert('아이디 또는 비밀번호가 틀렸습니다.');
    }
  };

  return (
    <div className="m-4">
      <label className="flex-none">Email : </label>
      <input
        type={"text"}
        name={"email"}
        value={email}
        className="flex-auto border border-gray-400 p-1 m-1"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label className="flex-none">Password : </label>
      <input
        type={"password"}
        name={"password"}
        value={password}
        className="flex-auto border border-gray-400 p-1 m-1"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <ButtonSubmit handleSubmit={handleSubmit} email={email} password={password}>
        로그인
      </ButtonSubmit>
    </div>
  );
}
