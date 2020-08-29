import React from 'react';
import { TOGGLE_DATA, FETCH_LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionType';
import axios from 'axios';

export const toggleMenuData=(payload)=>({
    type: TOGGLE_DATA,
    payload
})
export const fetchLoginRequest=(payload)=>({
    type: FETCH_LOGIN_REQUEST,
    payload
})
export const loginSuccess=(payload)=>({
    type: LOGIN_SUCCESS,
    payload
})
export const loginFailure=(payload)=>({
    type: LOGIN_FAILURE,
    payload
})

export const userLogin=(query)=>dispatch=>{
    dispatch(fetchLoginRequest())

    return(    
        axios
      .post(
        `https://api-stage.kyte.app/network-app/oauth/token?username=${query.email}&password=${query.password}&otp=&grant_type=password`,
        {
          
          headers: {
            'Content-Type': 'application/json',
          },
        },
        {
          auth: {
            username: 'cubicom',
            password: 'password',
          },
        }
      )

    .then((res)=>{
            console.log("login Data", res)
            return dispatch(loginSuccess(res))
        })
        .catch((error)=>{
            console.log(error)
        })
    )
}
