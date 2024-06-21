
import {call, put, select} from "redux-saga/effects";
import {PayloadAction} from "@reduxjs/toolkit";
import UserType from "../../UserType";
import {register} from "./register";
import {registerUserSuccess, registerUserFailure, AuthState, isRegistered} from "./registerReducer";
import {RootState} from "../../store";
import LoginResponse from "../login/state/loginResponse";
import {toast} from "react-toastify";
import error = toast.error;

export default function* registerUserSaga(action : PayloadAction <UserType>) {


    try {
        const form :UserType = yield select((state:RootState)=>{
            return state.registerForm;
        });
        let message :LoginResponse

        try {
            message = yield call(register, form.name, form.email, form.password, form.phone);
            if(message.statusText === 'Invalid credentials !' && message.statusCode === 422){
                // yield put(isRegistered(false));
                toast.error('Înregistrare eșuată. Vă rugăm să încercați din nou.',{position: "top-center" });
                throw error;
            }
            if(message.statusText === 'User already exist. Provide another email !' && message.statusCode === 404){
                toast.error('Exista deja un cont cu emailul dat',{position: "top-center"});
                throw error;
            }
            yield put(isRegistered(true));
            yield put(registerUserSuccess());
        }  catch (error){
            // @ts-ignore
            console.error('failed:', error.message);
        }
    } catch (error) {
        // @ts-ignore
        console.error('failed:', error);
        // @ts-ignore
        yield put(registerUserFailure(error));
    }
}

