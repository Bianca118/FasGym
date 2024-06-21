import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select} from "redux-saga/effects";
import {RootState} from "../store";
import {AuthState} from "../auth/login/loginReducer";
import {registerUserFailure} from "../auth/register/registerReducer";
import AbstractRequestData from "../service/AbstractRequestData";
import UserType from "../UserType";
import {modifyInfoUser} from "./modifyInfoUser";
import {onIsModifiedSucces, onSetUpdateUserForm} from "./updatedInfoUserReducer";
import {toast} from "react-toastify";
import error = toast.error;


interface UpdatedUserResponse extends AbstractRequestData{
    returnData: UserType;
}
export default function* UpdatedUserSaga(action : PayloadAction <AuthState>) {

        let message: UpdatedUserResponse;
    try {
        const form:AuthState = yield select((state:RootState)=>{
            return state.login;
        });
        const userModifyFormName:string = yield select((state:RootState)=>{
            return state.modifyUser.modifiedUser.name;
        }); const userModifyFormPhone:string = yield select((state:RootState)=>{
            return state.modifyUser.modifiedUser.phone;
        });
        message=yield call(modifyInfoUser,form.token, userModifyFormName, userModifyFormPhone);
        if(message.statusText === 'Missing parameters !' && message.statusCode === 422){
            toast.error('Completeză toate câmputile !', {position: "top-center"})
            throw error;
        }
        yield put(onSetUpdateUserForm(message.returnData));
        toast.success('Succes !', {position: "top-center"});
    } catch (error) {
        // @ts-ignore
        yield put(registerUserFailure({ error: error.message }));
    }
}



