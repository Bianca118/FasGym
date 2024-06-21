import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select} from "redux-saga/effects";
import {RootState} from "../store";
import {registerUserFailure} from "../auth/register/registerReducer";
import AbstractRequestData from "../service/AbstractRequestData";
import {toast} from "react-toastify";
import {getPhoto} from "./getPhoto";
import {onSetPhoto} from "./photoReducer";
import photoType from "./photoType";
import {AuthState} from "../auth/login/loginReducer";

interface response extends AbstractRequestData {
    returnData: photoType;
}

export default function* PhotoSaga(action: PayloadAction<photoType>) {


    try {
        const form:AuthState = yield select((state:RootState)=>{
            return state.login;
        });
        let message: response;
        try {
            message = yield call(getPhoto, form.token);
            yield put(onSetPhoto(message.returnData));
        } catch (error) {
            // @ts-ignore
            console.error(error.message);
        }
    } catch (error) {
        // @ts-ignore
        console.error(error.message);
        // @ts-ignore
        yield put(registerUserFailure({error: error.message}));
    }
}

