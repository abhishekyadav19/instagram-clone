import axios from 'axios';
import * as actionTypes from './actionTypes'


export const fetchData = () => ({
    type: actionTypes.FETHCHING_DATA,
});

export const fetchDataSuccess = (payload) => ({
    type: actionTypes.FETHCING_DATA_SUCCESS,
    payload
});

export const fetchDataFailure = (error) => ({
    type: actionTypes.FETHCING_DATA_FAILURE,
    error
});

const url = "https://jsonplaceholder.typicode.com/posts"

export const fetchDataApi = () => {
    return (dispatch) => {
        dispatch(fetchData());
        axios.get(url).then((res) => {
            console.log(res,"hsgdhgshf");
            dispatch(fetchDataSuccess(res.data))
        }).catch((error) => {
            dispatch(fetchDataFailure(error))
        })
    }
}
