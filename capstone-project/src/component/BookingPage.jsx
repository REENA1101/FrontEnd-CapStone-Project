import React from 'react'
import BookingForm from '../component/Pages/BookingForm'
import BackToTopButton from './FunctionalComps/BackToTopButton';

const BookingPage = (props) => {
  return (
    <>
    <BookingForm
      availableTimes={props.availableTimes}
      dispatch={props.dispatch}
      updateTimes={props.updateTimes}
    />

   <BackToTopButton/>
    </>
  );
};

export default BookingPage