import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import photoType from "./photoType";

const initialState: photoType = {
    user_id: 0,
    image: ''
};

const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {
        onInitPhoto(state) {
            state.user_id = initialState.user_id;
            state.image = initialState.image;
        },
        onSetPhoto(state, action: PayloadAction<photoType>) {
            state.image = action.payload.image;
            state.user_id = action.payload.user_id;
        },
    }
});

export const {onInitPhoto, onSetPhoto} = photoSlice.actions;
export default photoSlice.reducer;
