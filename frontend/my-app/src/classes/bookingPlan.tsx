import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import TaskType from "../TaskType";
import {ClassType} from "react";
import ClassesType from "./classesType";
interface ClassState {
   selectedClass: ClassesType;
}


const initialState: ClassState = {
    selectedClass:{ id: 0, name: '',trainer: {
            id: 0,
            name: ''
        },
        date: '',
        seats: 0,
        remaining_seats: 0},
};

const classSlice = createSlice({
    name: 'class',
    initialState,
    reducers: {

        onSetSelectedClass(state,  action: PayloadAction<ClassesType>) {
            state.selectedClass=action.payload;
            // state.selectedClass.name=action.payload;
        },

    }
});

export const { onSetSelectedClass } = classSlice.actions;
export default classSlice.reducer;
