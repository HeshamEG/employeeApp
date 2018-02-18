import {EMAIL_CHANGED,LOGIN_USER,LOGIN_USER_Fail,LOGIN_USER_SUCCESS,PASSWORD_CHANGED} from '../actions/types'


const INITIAL_STATE={
    email:'',
    password:'',
    user:null,
    error:'',
    loading:false

};

export default (state=INITIAL_STATE,action)=>{
    switch (action.type){

        case EMAIL_CHANGED:
return{...state,email:action.payload,error:''}
case PASSWORD_CHANGED:
return{...state,password:action.payload,error:''}
case LOGIN_USER_SUCCESS:
return{...state,user:action.payload,loading:false}
case LOGIN_USER_Fail:
return{...state,error:'Failed To Authenticate'
    ,password:INITIAL_STATE.password,email:INITIAL_STATE.email,
    loading:false}
    case LOGIN_USER:
return{...state,loading:true,error:''}

        default:
            return state
    }
}