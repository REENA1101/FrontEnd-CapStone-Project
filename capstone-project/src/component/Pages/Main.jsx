import React, { useState, useReducer } from 'react';
import BookingForm from './BookingForm';

const initialAvailableTimes = [
  // Initial available times
];

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Logic to update available times based on action.payload (selected date)
      return updatedTimes;
    default:
      return state;
  }
};

const Main = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, initialAvailableTimes);

  const updateTimes = (selectedDate) => {
    // Placeholder: Implement logic to fetch available times based on selectedDate
    return updatedTimes; // Replace with actual logic
  };

  const initializeTimes = () => {
    // Placeholder: Implement logic to fetch initial available times
    return initialAvailableTimes; // Replace with actual logic
  };

  return (
    <div>
      <BookingForm
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Main;
