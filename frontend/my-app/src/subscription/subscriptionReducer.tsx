import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import TaskType from "../TaskType";
import SubscriptionType from "./SubscriptionType";

interface SubscriptionState {
    subscr: SubscriptionType | null;
    loading: boolean;
    error: string | null;
}


const initialState: SubscriptionState = {
    subscr: null,
    loading: true,
    error: '',
};

const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    reducers: {
        onInitSubscription(state) {
            state.subscr = initialState.subscr;
        },

        onSetSubscription(state, action: PayloadAction<SubscriptionType>) {
            localStorage.setItem('selectedBook', JSON.stringify(action.payload));
            state.subscr = action.payload;
        },

        onInitInfo(state) {

            state.subscr = initialState.subscr;
        },
        onSetSubscriptionInfo(state, action: PayloadAction<SubscriptionType | null>) {
            state.subscr = action.payload;
        },
    }
});

export const {onInitSubscription, onInitInfo, onSetSubscriptionInfo, onSetSubscription} = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
