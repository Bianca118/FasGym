import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import PlanType from "./type/PlanType";
import TaskType from "../TaskType";
interface PlanState {
   plans: PlanType[] | null;
   loading: boolean;
    error: string | null;
}


const initialState: PlanState = {
       plans: [],
       loading: true,
       error: '',
};

const plansSlice = createSlice({
    name: 'plans',
    initialState,
    reducers: {
        onInitPlans(state){

          state.plans=initialState.plans;
        },

        onSetPlans(state,  action: PayloadAction<PlanType[]>) {
             state.plans=action.payload;
        },

    }
});

export const { onSetPlans,onInitPlans } = plansSlice.actions;
export default plansSlice.reducer;
