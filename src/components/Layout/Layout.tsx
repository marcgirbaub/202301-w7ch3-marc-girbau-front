import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import useToken from "../../hooks/useToken/useToken";
import LayoutStyled from "./LayoutStyled";
import { useAppSelector } from "../../store/hooks";
import useUser from "../../hooks/useUser/useUser";

const Layout = (): JSX.Element => {
  const { getToken } = useToken();
  const { logoutUser } = useUser();

  const { isLogged } = useAppSelector((state) => state.user);

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
              <Link to={"/"} type="button" className="btn btn-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to={"create"} type="button" className="btn btn-success">
                Create
              </Link>
            </li>
            {!isLogged && (
              <li>
                <Link to={"login"} type="button" className="btn btn-primary">
                  Login
                </Link>
              </li>
            )}
            {isLogged && (
              <li>
                <Link
                  to={"login"}
                  type="button"
                  className="btn btn-danger"
                  onClick={logoutUser}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <ToastContainer hideProgressBar />
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
