import './App.css';
import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Navigation from './component/Navigation';
import { Helmet } from 'react-helmet';
import './styles.css';

function App() {
  return (
    <div className="container">
       <h1>CAPSTONE PROJECT</h1>
        <Helmet>
          <meta name="description" content="Little Lemon is a charming restaurant offering delicious food and exceptional service." />
          <meta property="og:title" content="Little Lemon - Your Favorite Restaurant" />
          <meta property="og:description" content="Experience the taste of Little Lemon. Book your table now!" />
          <meta property="og:image" content="https://example.com/little-lemon-logo.png" />
        </Helmet>

          <Header />
          <Navigation />
          <Main />
          <Footer />
    </div>
  );
}

export default App;
