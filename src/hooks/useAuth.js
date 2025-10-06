import { useSelector, useDispatch } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} from "../store/slices/authSlice";
import { authService } from "../services/authService";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const loginUser = async (email, password) => {
    try {
      dispatch(loginStart());
      const response = await authService.login(email, password);
      dispatch(loginSuccess(response.data));
      return response.data;
    } catch (error) {
      dispatch(loginFailure(error.response.data.message));
      throw error;
    }
  };

  const registerUser = async (name, email, password) => {
    try {
      dispatch(loginStart());
      const response = await authService.register(name, email, password);
      dispatch(loginSuccess(response.data));
      return response.data;
    } catch (error) {
      dispatch(loginFailure(error.response.data.message));
      throw error;
    }
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return {
    user,
    isLoading,
    isError,
    message,
    loginUser,
    registerUser,
    logoutUser,
  };
};
