import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import useToken from "../../hooks/useToken/useToken";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const { getToken } = useToken();

  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    <LayoutStyled>
      <header className="main-header">
        <h1 className="main-header__title">Robots</h1>
        <nav>
          <ul className="main-header__nav nav">
            <li>
              <Link to={"/"}>
                <button type="button" className="btn btn-secondary">
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link to={"create"}>
                <button type="button" className="btn btn-success">
                  Create
                </button>
              </Link>
            </li>
            <li>
              <Link to={"login"}>
                <button type="button" className="btn btn-primary">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
