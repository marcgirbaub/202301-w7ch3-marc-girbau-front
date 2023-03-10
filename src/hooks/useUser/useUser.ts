import decodeToken from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { User } from "../../store/features/userSlice/types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";
import useToken from "../useToken/useToken";
import { CustomTokenPayload, LoginResponse, UserCredentials } from "./types";
import {
  showErrorModal,
  showLogoutSuccessModal,
  showSuccessModal,
} from "../../modals/modals";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  logoutUser: () => void;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const { removeToken } = useToken();

  const navigate = useNavigate();

  const apiUrl = process.env.REACT_APP_URL_API_LOGIN;
  const usersEndpoint = "/users";
  const loginEndpoint = "/login";

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      const response = await fetch(
        `${apiUrl}${usersEndpoint}${loginEndpoint}`,
        {
          method: "POST",
          body: JSON.stringify(userCredentials),
          headers: { "Content-type": "application/json" },
        }
      );

      const { token } = (await response.json()) as LoginResponse;

      const tokenPayload: CustomTokenPayload = decodeToken(token);

      const { id, username } = tokenPayload;

      const logginUser: User = {
        username,
        token,
        id,
      };

      dispatch(loginUserActionCreator(logginUser));
      localStorage.setItem("token", token);
      showSuccessModal("Login successful");
      navigate("/");
    } catch (error) {
      showErrorModal("Invalid credentials");
    }
  };

  const logoutUser = () => {
    removeToken();
    dispatch(logoutUserActionCreator());
    showLogoutSuccessModal();
  };

  return { loginUser, logoutUser };
};

export default useUser;
