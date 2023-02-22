import { useNavigate } from "react-router-dom";
import decodeToken from "jwt-decode";
import { useCallback } from "react";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { CustomTokenPayload } from "../useUser/types";

interface UseTokenStructure {
  getToken: () => void;
  removeToken: () => void;
}

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const { id, username } = decodeToken<CustomTokenPayload>(token);

      dispatch(loginUserActionCreator({ token, id, username }));
    }

    if (!token) {
      navigate("/login");
    }
  }, [dispatch, navigate]);

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  return { getToken, removeToken };
};

export default useToken;
