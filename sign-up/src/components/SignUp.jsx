import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp({ setLogin }) {
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
    setLogin(email === "admin" && password === "admin");
  };

  return (
    <div className="m-4">
      <InputLabel
        title="Email:"
        value={email}
        isPassword={false}
        onEventChange={(e) => handleValueChange(e, "email")}
      />
      <br />
      <InputLabel
        title="Password:"
        value={password}
        isPassword={true}
        onEventChange={(e) => handleValueChange(e, "password")}
      />
      <br />
      {/* <button type="submit" onSubmit={handleSubmit}>
        Sign Up
      </button> */}
      <Link to={'./main-view'}>Go!!</Link>
    </div>
  );
}
