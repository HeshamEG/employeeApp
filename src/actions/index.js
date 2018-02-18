import firebase from 'firebase'
import {LOGIN_USER_Fail,LOGIN_USER,EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USER_SUCCESS} from './types'
export const emailChanged=(text)=>{
    return{
        type:EMAIL_CHANGED,
        payload:text
    }
};export const passwordChanged=(text)=>{
    return{
        type:PASSWORD_CHANGED,
        payload:text
    }
};
export const loginUser=({email,password})=>{

    return(dispatch)=> {
        dispatch({type:LOGIN_USER})
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                loginUserSucces(dispatch,user)
            }).catch(e => {
                firebase
                    .auth().
                createUserWithEmailAndPassword
                (email,password).then(user=>{
                    loginUserSucces(dispatch,user)
                }).catch(()=>{
                    loginUserFail(dispatch)
                })
        })
    }
}


const loginUserSucces=(dispatch,user)=>{
    dispatch({type:LOGIN_USER_SUCCESS
        ,payload:user})
}
const loginUserFail=(dispatch)=>{
    dispatch({type:LOGIN_USER_Fail})
}