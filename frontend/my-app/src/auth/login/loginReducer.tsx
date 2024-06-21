

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AuthState {
    loading: boolean;
    error: string | null;
    isAuth: boolean;
    token: string;
}

const initialState: AuthState = {
    loading: false,
    error: null,
    isAuth: false,
    token: ''
};

const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onInitLogin(state) {
            state.loading = true;
            state.error = null;
        },
onInitLogout(state){
  state.isAuth=false;
},
        onLoginSuccess(state) {
            state.loading = false;
            state.error = null;
        },
        isAuth(state,action: PayloadAction<boolean>){
          state.isAuth=action.payload;
        },
        onLoginFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        userSetToken(state,  action: PayloadAction<string>) {
            state.token = action.payload;
        },
    },
});

export const { onInitLogin,onInitLogout,userSetToken,isAuth, onLoginSuccess, onLoginFailure } = loginSlice.actions;
export default loginSlice.reducer;
