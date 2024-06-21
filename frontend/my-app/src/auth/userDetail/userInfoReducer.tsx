import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import UserType from "../../UserType";

interface loginState {
    user: UserType;
}
const initialState: UserType = {

       id: 0,
       name: '',
       email:'',
       password:'',
       phone: '',
       id_card: '',
       qr_code: '',

};

const userInfoSlice = createSlice({
    name: 'authForm',
    initialState,
    reducers: {
        onInitUser(state) {
        },
        userSetInfo(state,  action: PayloadAction<UserType>) {
              state.email = action.payload.email;
              state.name = action.payload.name;
              state.phone = action.payload.phone;
              state.id_card = action.payload.id_card;
              state.qr_code=action.payload.qr_code;
        },

        resetAuthForm(state) {
            return initialState;
        }
    }
});

export const { resetAuthForm,onInitUser, userSetInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
