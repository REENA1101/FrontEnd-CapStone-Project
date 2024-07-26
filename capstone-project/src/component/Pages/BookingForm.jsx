import React, { useState, useEffect } from 'react';
import { fetchAPI } from './api';

const BookingForm = ({ selectedDate, setSelectedDate, availabledTimes, dispatch, updateTimes }) => {
  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
    updateTimes(new Date(event.target.value));
  };


  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const [availableeTimes, setAvailableeTimes] = useState([]);

  useEffect(() => {
    const fetchTimes = async () => {
      const response = await fetchAPI(selectedDate);
      setAvailableeTimes(response);
    };

    fetchTimes();
  }, [selectedDate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(reservationDate, reservationTime, numberOfGuests, occasion);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWith: '200px', gap: '20px', marginTop:'110px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={reservationDate}
        onChange={(e) => setReservationDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={reservationTime}
        onChange={(e) => setReservationTime(e.target.value)}
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={numberOfGuests}
        onChange={(e) => setNumberOfGuests(Number(e.target.value))}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input type="submit" value="Make Your Reservation" />
    </form>
  );
};

export default BookingForm;
