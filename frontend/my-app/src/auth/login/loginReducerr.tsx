import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import UserType from "../../UserType";
export interface AuthState {
    user: UserType | null;
}

const initialState: AuthState = {
    user: null,
};

const loginSlice = createSlice({
    name: 'authForm',
    initialState,
    reducers: {
        // updateFormField(state, action: PayloadAction<UserType>) {
        //     state.name=action.payload.name;
        //     state.email=action.payload.email;
        //     state.password=action.payload.password;
        // },
        userSetLogin2Request(state,  action: PayloadAction<UserType>) {
            state.user = action.payload;
            // state.password = action.payload.password;
        },
        // resetAuthForm(state) {
        //     return initialState;
        // }
    }
});

export const {userSetLogin2Request } = loginSlice.actions;
export default loginSlice.reducer;
// import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import UserType from "../UserType";
//
// const initialState = {
//     name: '',
//     email: '',
//     password: ''
// };
//
// const authFormSlice = createSlice({
//     name: 'authForm',
//     initialState,
//     reducers: {
//         updateFormField(state, action: PayloadAction<{ name: keyof UserType; value: string } {
//             const { name, value } = action.payload;
//             state[name] = value;
//         },
//         resetAuthForm(state) {
//             return initialState;
//         }
//     }
// });
//
// export const { updateFormField, resetAuthForm } = authFormSlice.actions;
// export default authFormSlice.reducer;
