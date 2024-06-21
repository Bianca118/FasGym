import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import PlanType from "./type/PlanType";
import TaskType from "../TaskType";
interface PlanState {
   selectedPlan: PlanType;
}


const initialState: PlanState = {
    selectedPlan:{ id: 0, name: '', price: 0, duration: 0, info: '' },
};

const planSlice = createSlice({
    name: 'plan',
    initialState,
    reducers: {

        onSetSelectedPlan(state,  action: PayloadAction<PlanType>) {
            state.selectedPlan=action.payload;
            localStorage.setItem('selectedPlan', JSON.stringify(action.payload));
        },

    }
});

export const { onSetSelectedPlan } = planSlice.actions;
export default planSlice.reducer;
