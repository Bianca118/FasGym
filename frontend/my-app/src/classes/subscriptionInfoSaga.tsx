import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select} from "redux-saga/effects";
import {RootState} from "../store";
import {AuthState, isAuth, onLoginSuccess} from "../auth/login/loginReducer";
import {registerUserFailure} from "../auth/register/registerReducer";
import AbstractRequestData from "../service/AbstractRequestData";
import {SubscriptionInfo} from "./api/subscriptionInfo";
import SubscriptionType from "../subscription/SubscriptionType";
import {onSetSubscriptionInfo} from "../subscription/subscriptionReducer";


interface response extends AbstractRequestData{
    returnData: SubscriptionType;
}
export default function* subscriptionInfoSaga(action : PayloadAction <AuthState>) {
let message: response;
    try {
        const form:AuthState = yield select((state:RootState)=>{
            return state.login;
        });
      try{
          message=yield call(SubscriptionInfo,form.token);
          yield put(onSetSubscriptionInfo(message.returnData));
      }
        catch (error){
            // @ts-ignore
            console.error(error.message);
        }

    } catch (error) {
        // @ts-ignore
        console.error(error.message);
        // @ts-ignore
        yield put(registerUserFailure({ error: error.message }));
    }
}



