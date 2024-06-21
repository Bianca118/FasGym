import {PayloadAction} from "@reduxjs/toolkit";
import UserType from "../UserType";
import {call, put, select} from "redux-saga/effects";
import {RootState} from "../store";
import RegisterResponse from "../service/RegisterResponse";
import {login} from "../auth/login/api/authAction";
import {AuthState, isAuth, onLoginSuccess} from "../auth/login/loginReducer";
import {userSetLoginAfter} from "../auth/login/loginFormReducer";
import {registerUserFailure} from "../auth/register/registerReducer";
import AbstractRequestData from "../service/AbstractRequestData";
import ClassesType from "./classesType";
import {classesAll} from "./api/getClasses";
import {onSetClasses} from "./classesReducer";


interface response extends AbstractRequestData{
    returnData: ClassesType[];
}
export default function* ClassesSaga(action : PayloadAction <AuthState>) {

let message: response;
    try {
        const form:AuthState = yield select((state:RootState)=>{
            return state.login;
        });

        message=yield call(classesAll,form.token);
        yield put(onSetClasses(message.returnData));
    } catch (error) {
        // @ts-ignore
        console.error('Registration failed:', error.message);
        // @ts-ignore
        yield put(registerUserFailure({ error: error.message }));
    }
}



