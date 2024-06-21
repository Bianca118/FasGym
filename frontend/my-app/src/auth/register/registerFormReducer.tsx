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

const registerFormSlice = createSlice({
    name: 'authForm',
    initialState,
    reducers: {
        updateFormField(state, action: PayloadAction<UserType>) {
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.password=action.payload.password;
            state.phone=action.payload.phone;
        },
        resetAuthForm(state) {
            return initialState;
        }
    }
});

export const { updateFormField, resetAuthForm } = registerFormSlice.actions;
export default registerFormSlice.reducer;
