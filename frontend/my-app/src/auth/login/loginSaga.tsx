import {call, put, select} from "redux-saga/effects";
import {PayloadAction} from "@reduxjs/toolkit";
import UserType from "../../UserType";
import {RootState} from "../../store";
import {login} from "./api/authAction";
import {registerUserFailure, registerUserSuccess} from "../register/registerReducer";
import RegisterResponse from "../../service/RegisterResponse";
import {isAuth, onLoginSuccess, userSetToken} from "./loginReducer";
import {userSetLoginAfter} from "./loginFormReducer";
import {toast} from "react-toastify";
import error = toast.error;
import {useNavigate} from "react-router-dom";

export default function* loginSaga(action: PayloadAction<UserType>) {


    try {
        const form: UserType = yield select((state: RootState) => {
            return state.loginForm;
        });
        let response: RegisterResponse;
        try {
            response = yield call(login, form.email, form.password);
            if (response.statusText === 'Invalid credentials !' && response.statusCode === 422) {
                // yield put(isRegistered(false));
                toast.error('Userul nu exista ! Email sau parola incorecte', {position: "top-center" });
                throw error;
            }
            const token = response.token;
            localStorage.setItem('token', token);
            yield put(onLoginSuccess());
            yield put(isAuth(true));
            yield put(userSetLoginAfter(response.returnData));
            yield put(userSetToken(response.token));
        } catch (error) {
            // @ts-ignore
            console.error( error.message);
        }
    } catch (error) {
        // @ts-ignore
        console.error(error.message);
        // @ts-ignore
        yield put(registerUserFailure({error: error.message}));
    }
}

