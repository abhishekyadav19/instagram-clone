import axios from 'axios'
import { toast } from 'react-toastify';
import * as actionTypes from './actionTypes'


export const ragisteruserpending = () => ({
    type: actionTypes.RAGISTER_USER_PENDING,
});

export const ragisteruser = (payload) => ({
    type: actionTypes.RAGISTER_USER,
    payload
});
export const ragisteruserfailed = (payload) => ({
    type: actionTypes.RAGISTER_USER_ERROR,
    payload
});

const url = "https://reqres.in/api/register"


export const ragisterusernew = (datas) => {
    return (dispatch) => {
        dispatch(ragisteruserpending())
        axios.post(url, datas).then((res) => {
            dispatch(ragisteruser(res.data))
            // toast.success(' Wow so easy!');
            window.location.href="/login"  
        }).catch((error) => {
            dispatch(ragisteruserfailed(error))
        })
    }
}