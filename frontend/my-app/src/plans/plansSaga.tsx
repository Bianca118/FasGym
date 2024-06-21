import {PayloadAction} from "@reduxjs/toolkit";
import UserType from "../UserType";
import {call, put, select} from "redux-saga/effects";
import {RootState} from "../store";
import RegisterResponse from "../service/RegisterResponse";
import {login} from "../auth/login/api/authAction";
import {isAuth, onLoginSuccess} from "../auth/login/loginReducer";
import {userSetLoginAfter} from "../auth/login/loginFormReducer";
import {registerUserFailure} from "../auth/register/registerReducer";
import PlanType from "./type/PlanType";
import {getPlans} from "./api/getPlans";
import {onSetPlans} from "./plansReducer";
import AbstractRequestData from "../service/AbstractRequestData";


interface response extends AbstractRequestData{
    returnData: PlanType[];
}
export default function* plansSaga(action : PayloadAction <UserType>) {

let message: response;
    try {
        message=yield call(getPlans);
        yield put(onSetPlans(message.returnData));
    } catch (error) {
        // @ts-ignore
        yield put(registerUserFailure({ error: error.message }));
    }
}

