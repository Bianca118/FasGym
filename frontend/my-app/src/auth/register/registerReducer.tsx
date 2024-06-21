
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    message: string | null;
    errors: string | null;
    isRegistered: boolean;
}

const initialState: AuthState = {
    message: null,
    errors: null,
    isRegistered: false,
};

const registerReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerUserStart(state) {
            state.message = null;
            state.errors = null;
        },
        registerUserSuccess(state) {
            state.errors = null;
        },
        registerUserFailure(state, action: PayloadAction<AuthState>) {
            state.message = null;
            state.errors = action.payload.errors;
        },
        isRegistered(state, action: PayloadAction<boolean>){
          state.isRegistered=true;
        },
    },
});

export const { registerUserStart,isRegistered, registerUserSuccess, registerUserFailure } = registerReducer.actions;

export default registerReducer.reducer;
