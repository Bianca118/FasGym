import {onInitTask} from "../reducers/taskReducer";
import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "../store";

export default function Task(){
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(onInitTask());
    },[dispatch]);
    const taskData = useSelector((state:RootState)=>{
        return state.task;
    });
    return ( <div>
            <h1>Tasks</h1>
            {taskData.loading ? (
                <p>Loading...</p>
            ) : taskData.error ? (
                <p>Error: {taskData.error}</p>
            ) : (
                <ul>
                    {taskData.tasks !== null && taskData.tasks !== undefined ? (
                        taskData.tasks.map(task => (
                            <li key={task.id}>{task.id } {task.name}</li>
                        ))
                    ) : (
                        <li></li>
                    )}
                </ul>
            )}
        </div>)



}