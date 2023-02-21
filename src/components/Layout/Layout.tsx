import { Outlet, Link } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <header className="main-header">
        <h1 className="main-header__title">Robots</h1>
        <Link to={"/"}>
          <button type="button" className="btn btn-secondary">
            Home
          </button>
        </Link>
        <Link to={"login"}>
          <button type="button" className="btn btn-primary">
            Login
          </button>
        </Link>
      </header>
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
