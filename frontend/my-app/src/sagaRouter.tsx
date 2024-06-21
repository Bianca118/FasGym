import {takeEvery,all} from "redux-saga/effects";
import userSaga from "./auth/register/userSaga";
import {registerUserStart} from "./auth/register/registerReducer";
import {onInitLogin, onInitLogout} from "./auth/login/loginReducer";
import loginSaga from "./auth/login/loginSaga";
import {onInitUser} from "./auth/userDetail/userInfoReducer";
import UserInfoSaga from "./auth/userDetail/userInfoSaga";
import {onInitPlans} from "./plans/plansReducer";
import plansSaga from "./plans/plansSaga";
import {onInitClasses} from "./classes/classesReducer";
import ClassesSaga from "./classes/classesSaga";
import {onInitInfo, onInitSubscription} from "./subscription/subscriptionReducer";
import SubscriptionSaga from "./subscription/subscriptionSaga";
import {onCancelBooking, onInitBookings} from "./classes/bookingReducer";
import BookingSaga from "./classes/bookingSaga";
import CancelBookingSaga from "./classes/cancelBookingSaga";
import subscriptionInfoSaga from "./classes/subscriptionInfoSaga";
import logoutSaga from "./auth/logout/logoutSaga";
import TrainersSaga from "./trainers/trainersSaga";
import {onInitTrainers} from "./trainers/trainersReducer";
import {onInitPhoto} from "./userPhoto/photoReducer";
import PhotoSaga from "./userPhoto/photoSaga";
import {onInitModify} from "./modify/updatedInfoUserReducer";
import UpdatedUserSaga from "./modify/updatedUserSaga";


export default function* sagaRouter()
{
    yield all([
        takeEvery(registerUserStart.type,userSaga),
        takeEvery(onInitLogin.type,loginSaga),
        takeEvery(onInitPlans.type,plansSaga),
        takeEvery(onInitClasses.type,ClassesSaga),
        takeEvery(onInitUser.type,UserInfoSaga),
        takeEvery(onInitSubscription.type,SubscriptionSaga),
        takeEvery(onInitBookings.type,BookingSaga),
        takeEvery(onCancelBooking.type,CancelBookingSaga),
        takeEvery(onInitInfo.type,subscriptionInfoSaga),
        takeEvery(onInitLogout.type,logoutSaga),
        takeEvery(onInitTrainers.type,TrainersSaga),
        takeEvery(onInitPhoto.type,PhotoSaga),
        takeEvery(onInitModify.type,UpdatedUserSaga),

    ]);
}
