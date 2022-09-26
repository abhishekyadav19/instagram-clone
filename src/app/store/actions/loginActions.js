import axios from 'axios'
import * as actionTypes from './actionTypes'
import { toast } from 'react-toastify'



export const loginuserpending = () => ({
    type: actionTypes.LOGIN_USER_PENDING,
});

export const loginuser = (payload) => ({
    type: actionTypes.LOGIN_USER,
    payload
});
export const loginuserfailed = (payload) => ({
    type: actionTypes.LOGIN_USER_ERROR,
    payload
});

const url = "https://reqres.in/api/login"

export const loginusernew = (datas) => {

    return (dispatch) => {
        dispatch(loginuserpending())
        axios.post(url, datas).then((res) => {
            dispatch(loginuser(res.data))
            localStorage.setItem("token", res.data.token)
            console.log(res.data, "response token");
            toast.success("Successfully Login")
            window.location.href = "/"

        }).catch((error) => {
            dispatch(loginuserfailed(error))
        })
    }
}