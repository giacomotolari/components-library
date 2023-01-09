import { useState } from "react";
import { ImEyeBlocked, ImEye } from "react-icons/im";
import "./input_password_eye.scss";

function InputPassowrdEye() {
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const handlePassword = (e) => {
    let _password = e.target.value;
    if (_password.length >= 5 && /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(_password)) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
    setPassword(_password);
  };

  const handleShowPassword = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <div className="password-icon-input-wrapper">
      <input
        type={inputType}
        id="password"
        value={password}
        placeholder="password"
        onChange={handlePassword}
        minLength={3}
        maxLength={20}
        style={{ border: !passwordIsValid && "1px solid red" }}
        onFocus={(e) => (e.currentTarget.style.backgroundColor = "yellow")}
        onBlur={(e) => (e.currentTarget.style.backgroundColor = "white")}
        onPaste={(e) => {
          e.preventDefault();
          return false;
        }}
        onCopy={(e) => {
          e.preventDefault();
          return false;
        }}
      />
      {inputType === "password" ? (
        <ImEyeBlocked
          className="icon-eye-password"
          onClick={handleShowPassword}
        />
      ) : (
        <ImEye className="icon-eye-password" onClick={handleShowPassword} />
      )}
    </div>
  );
}
export default InputPassowrdEye;
