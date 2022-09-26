import * as actionTypes from '../actions/actionTypes';

const initialState = {
    getGalleryData: [],
    loading: false,
    error: null,
}

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETHCHING_DATA:
            {
                return {
                    ...state,
                    loading: true,
                    error: null
                }
            }
        case actionTypes.FETHCING_DATA_SUCCESS:
            {
                return {
                    ...state,
                    loading: false,
                    getGalleryData: action.payload
                }
            }
        case actionTypes.FETHCING_DATA_FAILURE:
            {
                return {
                    ...state,
                    loading: false,
                    error: action.error,
                    getGalleryData: [],

                }
            }

        default:
            return state;
    }
}

export default galleryReducer