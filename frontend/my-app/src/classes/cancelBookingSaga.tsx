import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select} from "redux-saga/effects";
import {RootState} from "../store";
import {AuthState} from "../auth/login/loginReducer";
import {registerUserFailure} from "../auth/register/registerReducer";
import AbstractRequestData from "../service/AbstractRequestData";
import PlanType from "../plans/type/PlanType";
import {toast} from "react-toastify";
import { delay } from 'redux-saga/effects';
import { push } from 'connected-react-router'
import BookingType from "./bookingType";
import {bookings} from "./api/bookings";
import {onSetBookings} from "./bookingReducer";
import {cancelBooking} from "./api/cancelBooking";
import error = toast.error;


interface response extends AbstractRequestData{
    returnData: BookingType;
}
export default function* CancelBookingSaga(action : PayloadAction <BookingType>) {

let message: response;
    try {
        const form:AuthState = yield select((state:RootState)=>{
            return state.login;
        }); const planId:PlanType = yield select((state:RootState)=>{
            return state.class.selectedClass;
        });
       try{
           message=yield call(cancelBooking, form.token,planId.id);
           if(message.statusCode==422 && message.statusText==='First you need to book a class !'){
               toast.error('Mai intai trebuie sa rezervi o clasa !', {position: "top-center"});
                throw error;
           }
           toast.success('Ai anulat clasa !', {position: "top-center"});
           yield put(onSetBookings(null));
       } catch (error){
           // @ts-ignore
           console.error( error.message);
       }
        // if(message.statusCode===200){
        //     toast.success('Clasa achizitionat cu succes !', {position: "top-center" });
        //     yield delay(300);
        //     yield put(push('/Home'));
        // }

        // yield put(onSetBookings(message.returnData));
    } catch (error) {
        // @ts-ignore
        console.error('Registration failed:', error.message);
        // @ts-ignore
        yield put(registerUserFailure({ error: error.message }));
    }
}


