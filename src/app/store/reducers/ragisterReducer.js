import * as actionTypes from '../actions/actionTypes'

const initialState = {
    ragisterdata: {},
    loading: false,
    error: null,
}

const ragisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RAGISTER_USER_PENDING:
            {
                return {
                    ...state,
                    loading: true,
                }
            }
        case actionTypes.RAGISTER_USER:
            {
                return {
                    ...state,
                    loading: false,
                    ragisterdata: action.payload
                }
            }
        case actionTypes.RAGISTER_USER_ERROR:
            {
                return {
                    ...state,
                    loading: false,
                    ragisterdata: {}
                }
            }
        default:
            return state
    }
}

export default ragisterReducer