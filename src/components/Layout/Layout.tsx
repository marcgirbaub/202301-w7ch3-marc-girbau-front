import Form from "../Form/Form";
import LoginForm from "../LoginForm/LoginForm";
import RobotsList from "../RobotsList/RobotsList";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <header className="main-header">
        <h1 className="main-header__title">Robots</h1>
      </header>

      <RobotsList />
      <Form />
      <LoginForm />
    </LayoutStyled>
  );
};

export default Layout;
