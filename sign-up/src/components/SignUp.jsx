import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonSubmit from "./ButtonSubmit";

export default function SignUp() {
  function InputLabel({ title, value, isPassword, onEventChange }) {
    return (
      <div className="flex">
        <>
          <label className="flex-none">{title}</label>
          <input
            type={isPassword ? "password" : "text"}
            name={title}
            value={value}
            className="flex-auto border border-gray-400 p-1 m-1"
            onChange={onEventChange}
          />
        </>
      </div>
    );
  }

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleValueChange = (event, type) => {
    const v = event.target.value;
    if (type === "email") {
      setEmail(v);
    } else if (type === "password") {
      setPassword(v);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/main-view");
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
        <ButtonSubmit isEnabled={email && password} onClick={handleSubmit}>
          로그인
        </ButtonSubmit>
    </div>
  );
}
