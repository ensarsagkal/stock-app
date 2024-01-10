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
        // console.log(data);
    } catch (error) {
        
    }
}
const deleteFirm=async(id)=>{
    dispatch(fetchStart())
    try {
        await axiosWithToken.delete(`/firms/${id}`) 
        getFirms()
        
    } catch (error) {
        
    }


}
const addFirm =async(firmInfo)=>{
    dispatch(fetchStart())
    try {
        
    } catch (error) {
        
    }

}
  return {getFirms,deleteFirm}

}

export default useStockCalls