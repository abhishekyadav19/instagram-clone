import * as actionTypes from '../actions/actionTypes'

const initialState = {
    logindata: {},
    loading: false,
    error: null,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_PENDING:
            {
                return {
                    ...state,
                    loading: true,
                }
            }
        case actionTypes.LOGIN_USER:
            {
                return {
                    ...state,
                    loading: false,
                    logindata: action.payload
                }
            }
        case actionTypes.LOGIN_USER_ERROR:
            {
                return {
                    ...state,
                    loading: false,
                    logindata: {}
                }
            }
        default:
            return state
    }
}

export default loginReducer