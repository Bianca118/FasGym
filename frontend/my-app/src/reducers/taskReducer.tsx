import TaskType from "../TaskType";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TaskState {
    tasks: TaskType[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: TaskState = {
    tasks: null,
    loading: false,
    error: null,
};

const taskReducer = createSlice ({
    name:"taskReducer",
    initialState,reducers:{

        onInitTask(state) {
            state.loading = true;
            state.error = null;
        },
        onTaskFull(state, action: PayloadAction<TaskType[]> ) {
            state.loading = false;
            state.tasks = action.payload;
        },
        fetchTasksFailure(state,action) {
            state.loading = false;
            state.error = action.payload;
        },
    }
});
    // switch (action.type) {
    //     case TaskActionTypes.INIT_TASK:
    //         return {
    //             ...state,
    //             loading: true,
    //             error: null,
    //         };
    //     case TaskActionTypes.TASKS_FETCH_SUCCESS:
    //         return {
    //             ...state,
    //             tasks: action.payload,
    //             loading: false,
    //             error: null,
    //         };
    //     case TaskActionTypes.TASKS_FETCH_ERROR:
    //         return {
    //             ...state,
    //             loading: false,
    //             error: action.error,
    //         };
    //     default:
    //         return state;
    // }


export const {onInitTask,onTaskFull,fetchTasksFailure}=taskReducer.actions;
export default taskReducer.reducer;
