import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(value);
  };

  const handlePassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    loginUser({ username, password });

    setUsername("");
    setPassword("");
  };

  return (
    <LoginFormStyled onSubmit={onSubmitHandler}>
      <h2>Log in</h2>
      <div className="mb-3">
        <label htmlFor="unsername" className="form-label">
          Username
        </label>
        <input
          type="unsername"
          className="form-control"
          id="unsername"
          onChange={handleUsername}
          value={username}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={handlePassword}
          value={password}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
