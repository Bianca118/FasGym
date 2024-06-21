import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select} from "redux-saga/effects";
import {RootState} from "../store";
import {registerUserFailure} from "../auth/register/registerReducer";
import AbstractRequestData from "../service/AbstractRequestData";
import PlanType from "../plans/type/PlanType";
import {toast} from "react-toastify";
import axios from "axios";
import error = toast.error;
import TrainersType from "./trainersType";
import {getTrainers} from "./getTrainers";
import {onSetTrainers} from "./trainersReducer";

interface response extends AbstractRequestData {
    returnData: TrainersType[];
}

export default function* TrainersSaga(action: PayloadAction<TrainersType[]>) {


    try {

        let response: response;
        try {
            response = yield call(getTrainers);
            yield put(onSetTrainers(response.returnData));
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

