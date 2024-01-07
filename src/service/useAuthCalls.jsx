import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { useNavigate } from "react-router-dom"
import { fetchFail, fetchStart, loginSucces,registerSuccess } from "../features/authSlice"
import { useDispatch } from "react-redux"

const useAuthCalls = () => {
  const navigate = useNavigate()
  const dispatch=useDispatch()

  const login = async (userInfo) => {
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login/`,
        userInfo
      )
      dispatch(loginSucces(data))
      toastSuccessNotify("Login işlemi basarili.")
      navigate("/stock")
      
      
      
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Login işlemi başarisiz oldu.")
      console.log(error)
    }
  }

  const register = async (registerInfo) => {
    try {
      const {data}=await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/`,registerInfo
      )
      dispatch(registerSuccess(data))
      toastSuccessNotify("Register işlemi başarılı")
      console.log(data);
      navigate("/stock")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Register işlemi başarısız oldu")
      console.log(error);
      
    }
  }

  const logout = async () => {}

  return { login, register, logout }
}

export default useAuthCalls
