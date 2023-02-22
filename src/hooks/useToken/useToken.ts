import { useNavigate } from "react-router-dom";
import decodeToken from "jwt-decode";
import { useCallback } from "react";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CustomTokenPayload } from "../useUser/types";

interface UseTokenStructure {
  getToken: () => void;
  removeToken: () => void;
}

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLogged } = useAppSelector((state) => state.user);

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const { id, username } = decodeToken<CustomTokenPayload>(token);

      dispatch(loginUserActionCreator({ token, id, username }));
    }

    if (!isLogged) {
      navigate("/login");
    }
  }, [dispatch, isLogged, navigate]);

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  return { getToken, removeToken };
};

export default useToken;
