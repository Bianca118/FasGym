import {call, put, select} from "redux-saga/effects";
import {PayloadAction} from "@reduxjs/toolkit";
import UserType from "../../UserType";
import {RootState} from "../../store";
import {registerUserFailure, registerUserSuccess} from "../register/registerReducer";
import RegisterResponse from "../../service/RegisterResponse";
import {toast} from "react-toastify";
import error = toast.error;
import {useNavigate} from "react-router-dom";
import {AuthState, isAuth} from "../login/loginReducer";
import {logoutApi} from "./logoutApi";
import {push} from "connected-react-router";

export default function* logoutSaga(action: PayloadAction<UserType>) {


    try {

        const form:AuthState = yield select((state:RootState)=>{
            return state.login;
        });

        let message: RegisterResponse;
        try {
            message = yield call(logoutApi, form.token);
            const token = message.token;
            yield put(isAuth(false));
            yield put(push('/login'));

            // history.push("/login");
        } catch (error) {
            // @ts-ignore
            console.error('Registration failed:', error.message);
        }
    } catch (error) {
        // @ts-ignore
        console.error('Registration failed:', error.message);
        // @ts-ignore
        yield put(registerUserFailure({error: error.message}));
    }
}

