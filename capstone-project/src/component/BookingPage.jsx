import React from 'react'
import BookingForm from '../component/Pages/BookingForm'

const BookingPage = (props) => {
  return (
    <BookingForm
      availableTimes={props.availableTimes}
      dispatch={props.dispatch}
      updateTimes={props.updateTimes}
    />
  );
};

export default BookingPage