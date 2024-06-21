import {put, select} from "redux-saga/effects";
import {call} from "redux-saga/effects"
import UserType from "../../UserType";
import {PayloadAction} from "@reduxjs/toolkit";
import { getUserInfo} from "./api/getUserInfo";
import {userSetInfo} from "./userInfoReducer";
import {AuthState} from "../login/loginReducer";
import {RootState} from "../../store";
import AbstractRequestData from "../../service/AbstractRequestData";

interface response extends AbstractRequestData{
    returnData: UserType;
}
export default function* UserInfoSaga(action :PayloadAction<UserType> ){
    let response:response;
    try {
        const form: AuthState = yield select((state: RootState) => {
            return state.login;
        });
        response=yield call(getUserInfo, form.token);
        yield put (userSetInfo(response.returnData));
    } catch (error) {
        // @ts-ignore
       console.log(error);
    }
}
