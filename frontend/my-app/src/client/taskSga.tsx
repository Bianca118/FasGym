import {taskApi} from "../api/taskApi";

import {PayloadAction} from "@reduxjs/toolkit";
import TaskType from "../TaskType";
import TaskData from "../TaskData";
import {fetchTasksFailure, onInitTask, onTaskFull} from "../reducers/taskReducer";
import {put} from "redux-saga/effects";
import {call} from "redux-saga/effects"
export default function* TaskSga(action :PayloadAction<TaskType> ){
    // let response:TaskType[];
    let response:TaskData;
    try {

        response=yield call(taskApi);
        yield put(onTaskFull(response.data));
    } catch (error) {
        // @ts-ignore
        yield put(fetchTasksFailure(error.message()));
    }
}
