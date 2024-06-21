import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import TaskType from "../TaskType";
import ClassesType from "./classesType";
interface ClassesState {
   classes: ClassesType[] | null;
   loading: boolean;
    error: string | null;
}


const initialState: ClassesState = {
       classes: [],
       loading: true,
       error: '',
};

const classesSlice = createSlice({
    name: 'classes',
    initialState,
    reducers: {
        onInitClasses(state){

          state.classes=initialState.classes;
        },

        onSetClasses(state,  action: PayloadAction<ClassesType[]>) {
             state.classes=action.payload;
        },

    }
});

export const { onInitClasses, onSetClasses } = classesSlice.actions;
export default classesSlice.reducer;
