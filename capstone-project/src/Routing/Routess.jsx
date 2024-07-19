import { Routes, Route } from 'react-router-dom';
import HomePage from '../component/HomePage';
import BookingPage from '../component/BookingPage';

function Routess() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
      {/* Other routes */}
    </Routes>
  );
}

export default Routess;