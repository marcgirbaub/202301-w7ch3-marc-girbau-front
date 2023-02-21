import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="unsername" className="form-label">
          Username
        </label>
        <input
          type="unsername"
          className="form-control"
          id="unsername"
          value={userCredentials.username}
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
          value={userCredentials.password}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
