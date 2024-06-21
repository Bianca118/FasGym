import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import TaskType from "../TaskType";
import ClassesType from "./classesType";
import BookingType from "./bookingType";
import SubscriptionType from "../subscription/SubscriptionType";
interface bookingsState {
   bookings: BookingType| null;
   loading: boolean;
    error: string | null;
}


const initialState: bookingsState = {
       bookings: null,
       loading: true,
       error: '',
};

const bookingSlice = createSlice({
    name: 'classes',
    initialState,
    reducers: {
        onInitBookings(state){

            state.bookings=initialState.bookings;
        },

        onCancelBooking(state){

            state.bookings=initialState.bookings;
        },

        onSetBookings(state,  action: PayloadAction<BookingType|null>) {
            state.bookings=action.payload;
            localStorage.setItem('booking', JSON.stringify(action.payload));
        },
    }
});

export const { onInitBookings,onCancelBooking, onSetBookings } = bookingSlice.actions;
export default bookingSlice.reducer;
