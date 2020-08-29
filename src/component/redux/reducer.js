import React from 'react';
import {
    TOGGLE_DATA,
    FETCH_LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './actionType';

const initState = ({
    toggleData: true,
    isLoading: false,
    isLogin: false,
    loginData: []
})

const reducer = (state = initState, {
    type,
    payload
}) => {
    console.log("isLogin", state.isLogin)
    switch (type) {
        case TOGGLE_DATA:
            return {
                toggleData: !state.toggleData,
                    isLogin: false,
            }
            case FETCH_LOGIN_REQUEST:
                return {
                    isLoading: true
                }

                case LOGIN_SUCCESS:
                    return {
                        isLoading: false,
                            isLogin: true,
                            toggleData: true,
                            loginData: payload
                    }

                    case LOGIN_FAILURE:
                        return {
                            isLoading: false,
                                isLogin: false,
                                loginData: payload
                        }
                        
                        default:
                            return state;
    }
}

export default reducer;