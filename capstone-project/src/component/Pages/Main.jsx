import React, { useState, useReducer } from 'react';
import BookingForm from './BookingForm';
import { useEffect } from 'react';

const initialAvailableTimes = [
  // Initial available times
];

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const selectedDay = action.payload.getDay(); // Get the day of the week
      // Simulate fetching available times based on the day
      const updatedTimes = selectedDay === 0 // Sunday
        ? ['12:00', '14:00', '16:00']
        : ['10:00', '11:00', '13:00', '15:00', '17:00'];
      return updatedTimes;
    default:
      return state;
  }
};


const Main = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, initialAvailableTimes);

  const updateTimes = (selectedDate) => {
    // Replace with your actual logic to fetch available times from an API
    // Here's an example using fetch (replace with your API endpoint)
    fetch(`/api/available-times?date=${selectedDate.toISOString()}`)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'UPDATE_TIMES', payload: data }); // Dispatch the fetched data
      })
      .catch(error => console.error(error));
  };

  const initializeTimes = () => {
    // Placeholder: Implement logic to fetch initial available times
    return initialAvailableTimes; // Replace with actual logic
  };

  useEffect(() => {
    initializeTimes();
  }, []);


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
