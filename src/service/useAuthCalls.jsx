import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import {
  fetchFail,
  fetchStart,
  loginSucces,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { useDispatch } from "react-redux";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login/`,
        userInfo
      );
      console.log(data);
      dispatch(loginSucces(data));
      toastSuccessNotify("Login işlemi basarili.");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login işlemi başarisiz oldu.");
      console.log(error);
    }
  };

  const register = async (registerInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/`,
        registerInfo
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register işlemi başarılı");

      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Register işlemi başarısız oldu");
      console.log(error);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios(`${process.env.REACT_APP_BASE_URL}/auth/logout/`);
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout işlemi başarılı");
      navigate("/");
    } catch (error) {}
  };

  return { login, register, logout };
};

export default useAuthCalls;
