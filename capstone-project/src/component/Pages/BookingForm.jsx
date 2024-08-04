import React, { useState, useEffect } from 'react';

const BookingForm = ({ selectedDate, setSelectedDate, availabledTimes, dispatch, updateTimes }) => {
  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
    updateTimes(new Date(event.target.value));
  };


  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  // const [notificationMessage, setNotificationMessage] = useState('');
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');
  const [guestsError, setGuestsError] = useState('');
  const [occasionError, setOccasionError] = useState('');

  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (!reservationDate) {
    //   setNotificationMessage('Please select a date.');
    //   setShowNotification(true);
    //   setTimeout(() => setShowNotification(false), 4000);
    //   return;
    // }

    // if (!reservationTime) {
    //   setNotificationMessage('Please select a time.');
    //   setShowNotification(true);
    //   setTimeout(() => setShowNotification(false), 4000);
    //   return;
    // }

    // if (!numberOfGuests || numberOfGuests < 1) {
    //   setNotificationMessage('Please enter a valid number of guests.');
    //   setShowNotification(true);
    //   setTimeout(() => setShowNotification(false), 4000);
    //   return;
    // }

    // if (!occasion) {
    //   setNotificationMessage('Please select an occasion.');
    //   setShowNotification(true);
    //   setTimeout(() => setShowNotification(false), 4000);
    //   return;
    // }

    let valid=true;

    if (!reservationDate) {
      setDateError('Please select a date.');
      valid = false;
    } else {
      setDateError('');
    }

    if (!reservationTime) {
      setTimeError('Please select a time.');
      valid = false;
    } else {
      setTimeError('');
    }

    if (!numberOfGuests || numberOfGuests < 1) {
      setGuestsError('Please enter a valid number of guests.');
      valid = false;
    } else {
      setGuestsError('');
    }

    if (!occasion) {
      setOccasionError('Please select an occasion.');
      valid = false;
    } else {
      setOccasionError('');
    }


     if(valid){
        // Handle form submission logic here
        console.log(reservationDate, reservationTime, numberOfGuests, occasion);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 4000);
     }
  };

  return (
    <div>
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWith: '200px', gap: '20px', marginTop:'110px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={reservationDate}
        onChange={(e) => setReservationDate(e.target.value)}
      />
        {dateError && <div style={{ color: 'red' }}>{dateError}</div>}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={reservationTime}
        onChange={(e) => setReservationTime(e.target.value)}
      >
         <option value="">Select a time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      {timeError && <div style={{ color: 'red' }}>{timeError}</div>}


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

{guestsError && <div style={{ color: 'red' }}>{guestsError}</div>}

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
      {occasionError && <div style={{ color: 'red' }}>{occasionError}</div>}



      <input type="submit" value="Make Your Reservation" />
    </form>

    {showNotification && (
        <div style={{ marginTop: '-220px', marginLeft:"485px",  padding: '30px', backgroundColor: '#353333', color: '#cacaca', width:"300px",height:"120px", zIndex:"100", borderRadius: '5px',textAlign:"center", position: 'absolute', fontSize:"20px" }}>
          Thank you for your reservation!
          {/* {{notificationMessage}} */}
          
        </div>
      )}


    </div>
  );
};

export default BookingForm;
