import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import UserType from "../../UserType";

const initialState: UserType = {

       id: 0,
       name: '',
       email:'',
       password:'',
       phone: '',
       id_card: '',
       qr_code: '',

};

const loginFormSlice = createSlice({
    name: 'authForm',
    initialState,
    reducers: {

        userSetLoginForm(state,  action: PayloadAction<UserType>) {
              state.email = action.payload.email;
              state.password = action.payload.password;
        },
        userSetLoginAfter(state,  action: PayloadAction<UserType>) {
              state.id= action.payload.id;
              state.email = action.payload.email;
              state.name = action.payload.name;
              state.id_card = action.payload.id_card;
              state.phone = action.payload.phone;
              state.qr_code=action.payload.qr_code;
        },
        resetAuthForm(state) {
            return initialState;
        }
    }
});

export const { resetAuthForm,userSetLoginAfter, userSetLoginForm } = loginFormSlice.actions;
export default loginFormSlice.reducer;
