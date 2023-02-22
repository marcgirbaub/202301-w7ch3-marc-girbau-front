import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <LoginForm />
      <ToastContainer autoClose={3000} hideProgressBar />
    </LoginPageStyled>
  );
};

export default LoginPage;
