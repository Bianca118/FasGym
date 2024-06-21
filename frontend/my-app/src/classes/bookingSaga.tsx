import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select} from "redux-saga/effects";
import {RootState} from "../store";
import {AuthState} from "../auth/login/loginReducer";
import {registerUserFailure} from "../auth/register/registerReducer";
import AbstractRequestData from "../service/AbstractRequestData";
import PlanType from "../plans/type/PlanType";
import {toast} from "react-toastify";
import {delay} from 'redux-saga/effects';
import {push} from 'connected-react-router'
import BookingType from "./bookingType";
import {bookings} from "./api/bookings";
import {onSetBookings} from "./bookingReducer";
import error = toast.error;


interface response extends AbstractRequestData {
    returnData: BookingType;
}

export default function* BookingSaga(action: PayloadAction<BookingType>) {

    let message: response;
    try {
        const form: AuthState = yield select((state: RootState) => {
            return state.login;
        });
        const planId: PlanType = yield select((state: RootState) => {
            return state.class.selectedClass;
        });
        try {
            message = yield call(bookings, form.token, planId.id);
            if (message.statusCode == 422 && message.statusText === 'You already have booked this class !') {
                toast.error('Ai rezervat deja această clasă !', {position: "top-center"});
                throw error;
            }

            if (message.statusCode == 422 && message.statusText === 'No remaining seats !') {
                toast.error('Nu mai sunt locuri libere !', {position: "top-center"});
                throw error;
            }
            yield put(onSetBookings(message.returnData));
            toast.success('Clasă rezervată cu succes !', {position: "top-center"});

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


