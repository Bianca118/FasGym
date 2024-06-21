import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import TaskType from "../TaskType";
import ClassesType from "../classes/classesType";
import UserType from "../UserType";

interface UpdatedUserState {
    user: UserType;
    modifiedUser: {
        name: string,
        phone: string
    };
    succes: boolean | null
}


const initialState: UpdatedUserState = {
    user: {
        id: 0,
        name: '',
        email: '',
        password: '',
        phone: '',
        id_card: '',
        qr_code: '',
    },
    modifiedUser: {name: '', phone: ''},
    succes: false
};

const updatedUserInfoSlice = createSlice({
    name: 'updateInfoUser',
    initialState,
    reducers: {
        onInitModify(state) {
        },

        onSetUpdateUser(state, action: PayloadAction<UserType>) {
            state.user.name = action.payload.name;
            state.user.phone = action.payload.phone;
        },
        onSetUpdateUserForm(state, action: PayloadAction<UserType>) {
            state.modifiedUser.name = action.payload.name;
            state.modifiedUser.phone = action.payload.phone;
        },
        onIsModifiedSucces(state, action: PayloadAction<boolean>) {
            state.succes = true
        },

    }
});

export const {onSetUpdateUser,onIsModifiedSucces, onSetUpdateUserForm, onInitModify} = updatedUserInfoSlice.actions;
export default updatedUserInfoSlice.reducer;
