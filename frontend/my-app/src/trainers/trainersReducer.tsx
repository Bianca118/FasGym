import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import TrainersType from "./trainersType";

interface TrainersState {
    trainers: TrainersType[] | null;
}


const initialState: TrainersState = {
  trainers: null
};

const trainersSlice = createSlice({
    name: 'subscription',
    initialState,
    reducers: {
        onInitTrainers(state) {
            state.trainers = initialState.trainers;
        },

        onSetTrainers(state, action: PayloadAction<TrainersType[] | null>) {
            state.trainers = action.payload;
        },
    }
});

export const {onInitTrainers, onSetTrainers} = trainersSlice.actions;
export default trainersSlice.reducer;
