import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select} from "redux-saga/effects";
import {RootState} from "../store";
import {AuthState} from "../auth/login/loginReducer";
import {registerUserFailure} from "../auth/register/registerReducer";
import AbstractRequestData from "../service/AbstractRequestData";
import SubscriptionType from "./SubscriptionType";
import {postSubscription} from "./postSubscription";
import {onSetSubscription} from "./subscriptionReducer";
import PlanType from "../plans/type/PlanType";
import {toast} from "react-toastify";
import error = toast.error;

interface response extends AbstractRequestData {
    returnData: SubscriptionType;
}

export default function* SubscriptionSaga(action: PayloadAction<SubscriptionType>) {


    try {

        let response: response;
        const form: AuthState = yield select((state: RootState) => {
            return state.login;
        });
        const planId: PlanType = yield select((state: RootState) => {
            return state.plan.selectedPlan;
        });
        try {
            response = yield call(postSubscription, planId.id, form.token);
            if (response.statusCode === 422 && response.statusText === 'You already have another active plan !') {
                toast.error('Exista un abonament activ !', {position: "top-center"});
                throw error;
            }
            toast.success('Abonament achizitionat cu succes !', {position: "top-center"});
            yield put(onSetSubscription(response.returnData));
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

