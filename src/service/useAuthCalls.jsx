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
import { useDispatch, useSelector } from "react-redux";
import useAxios from "./useAxios";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const {axiosWithToken,axiosPublic}=useAxios()

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/auth/login/`,
      //   userInfo
      // );
      const {data}= await axiosPublic.post("/auth/login/",userInfo)
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
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/users/`,
      //   registerInfo
      // );
      const {data}= await axiosPublic("/users",registerInfo)
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
      // await axios(`${process.env.REACT_APP_BASE_URL}/auth/logout/`, {
      //   headers: { Authorization: `Token ${token}` },
      // });
      await axiosWithToken("/auth/logout/")
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout işlemi başarılı");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Logout işlemi başarısız oldu");
    }
  };

  return { login, register, logout };
};

export default useAuthCalls;
