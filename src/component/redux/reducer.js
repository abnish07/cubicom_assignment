import React from 'react';
import { TOGGLE_DATA,FETCH_LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionType';

const initState=({
    toggleData: true,
    isLoading: false,
    loginData: []
})

const reducer=(state = initState, { type, payload })=>{
    console.log("payload", state.toggleData)
    switch(type){
        case TOGGLE_DATA:
            return{
                toggleData: !state.toggleData
            }
        case FETCH_LOGIN_REQUEST:
            return{
                isLoading: true
            }
        case LOGIN_SUCCESS:
            return{
                isLoading: false,
                loginData: payload
            }
        case LOGIN_FAILURE:
            return{
                isLoading: false,
                loginData: payload
            }
            default:
                return state;
    }
}

export default reducer;