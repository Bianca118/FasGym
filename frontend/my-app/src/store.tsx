
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import taskReducer from "./reducers/taskReducer";
import sagaRouter from "./sagaRouter";
import registerReducer from "./auth/register/registerReducer";
import loginReducer from "./auth/login/loginReducer";
import registerFormReducer from "./auth/register/registerFormReducer";
import loginFormReducer from "./auth/login/loginFormReducer";
import userInfoReducer from "./auth/userDetail/userInfoReducer";
import plansReducer from "./plans/plansReducer";
import classesReducer from "./classes/classesReducer";
import planReducer from "./plans/planReducer";
import bookingPlan from "./classes/bookingPlan";
import bookingReducer from "./classes/bookingReducer";
import subscriptionReducer from "./subscription/subscriptionReducer";
import trainersReducer from "./trainers/trainersReducer";
import photoReducer from "./userPhoto/photoReducer";
import updatedInfoUserReducer from "./modify/updatedInfoUserReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        task: taskReducer,
        registerForm : registerFormReducer,
        register: registerReducer,
        loginForm: loginFormReducer,
        login: loginReducer,
        userInfo: userInfoReducer,
        plans: plansReducer,
        plan: planReducer,
        classes: classesReducer,
        class:bookingPlan,
        booking:bookingReducer,
        subscriptions: subscriptionReducer,
        trainers: trainersReducer,
        photo: photoReducer,
        modifyUser: updatedInfoUserReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(sagaRouter); // Rulează rootSaga-ul pentru a porni sagas

export type RootState=ReturnType<typeof store.getState>;