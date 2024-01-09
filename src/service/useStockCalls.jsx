import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchStart, firmsSuccess } from '../features/stockSlice'
import useAxios from './useAxios'

const useStockCalls = () => {
const dispatch = useDispatch()
const {axiosWithToken}= useAxios()
const getFirms= async()=>{
    dispatch(fetchStart())
    try {
        const {data}= await axiosWithToken("/firms/")
        dispatch(firmsSuccess(data))
        console.log(data);
    } catch (error) {
        
    }
}
  return {getFirms}

}

export default useStockCalls