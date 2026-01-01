import React from 'react';
import ReactDOM from 'react-dom/client';
import { jsx } from 'react/jsx-runtime';


// JSX Component

const PortfolioHeaderComponent = () => {
  const userName = "Sahil Gharte";
  const balance = 10000.50;
  
  // Note: CSS properties in JSX use camelCase (fontSize, not font-size)
  const styles = {
    color: 'green',
    fontSize: '24px',
    fontWeight: 'bold'
  };

  return (
    <div className="header-card">
      <h2>Welcome back, {userName}</h2>
      <p>
        Current Balance: 
        {/* We use double curlies {{}} if putting styles directly, 
            or single {} if referencing an object variable */}
        <span style={styles}> ${balance}</span>
      </p>
    </div>
  );
};

// 1. The Child Component (Pure UI, No State)
const CreditCard = ({ cardHolder, cardNumber, expiry, brand, balance }) => {
  
  // Helper to format the card number (e.g., **** **** **** 1234)
  const getLastFour = (num) => {
    const str = num.toString();
    return str.slice(-4);
  };

  // CSS Styles defined as objects (No interaction logic needed)
  const styles = {
    cardContainer: {
      // The "Glassmorphism" gradient background
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '20px',
      color: 'white',
      width: '380px',
      height: '220px',
      padding: '25px',
      boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: '"Courier New", Courier, monospace', // Monospace for card feel
      position: 'relative',
      overflow: 'hidden', // Keeps the "shine" circles inside
    },
    // Decorative circles to make it look "Glassy"
    circle1: {
      position: 'absolute',
      background: 'rgba(255,255,255,0.1)',
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      top: '-30px',
      right: '-30px',
      zIndex: 0,
    },
    circle2: {
      position: 'absolute',
      background: 'rgba(255,255,255,0.05)',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      bottom: '-50px',
      left: '-50px',
      zIndex: 0,
    },
    topRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      zIndex: 1, // Ensures text sits above decorative circles
    },
    chip: {
      width: '50px',
      height: '35px',
      background: 'linear-gradient(135deg, #d9a7c7 0%, #fffcdc 100%)',
      borderRadius: '6px',
    },
    brand: {
      fontSize: '22px',
      fontStyle: 'italic',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    numberRow: {
      fontSize: '26px',
      letterSpacing: '4px',
      textAlign: 'center',
      marginTop: '20px',
      zIndex: 1,
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
    },
    bottomRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 'auto',
      zIndex: 1,
      fontFamily: 'Arial, sans-serif', // Switch font for labels
    },
    label: {
      fontSize: '10px',
      opacity: 0.8,
      textTransform: 'uppercase',
      marginBottom: '4px',
    },
    value: {
      fontSize: '16px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    }
  };

  return (

    <div style={styles.cardContainer}>

  <div>{numberRandom}</div>

      {/* Decorative Background Elements */}
      <div style={styles.circle1}></div>
      <div style={styles.circle2}></div>

      {/* Top Section: Chip & Brand */}
      <div style={styles.topRow}>
        <div style={styles.chip}></div>
        <div style={styles.brand}>{brand}</div>
      </div>

      {/* Middle Section: Card Number */}
      <div style={styles.numberRow}>
        <span>**** **** **** </span>
        <span>{getLastFour(cardNumber)}</span>
      </div>

      {/* Bottom Section: Name, Date, Balance */}
      <div style={styles.bottomRow}>
        <div>
          <div style={styles.label}>Card Holder</div>
          <div style={styles.value}>{cardHolder}</div>
        </div>
        
        <div>
          <div style={styles.label}>Expires</div>
          <div style={styles.value}>{expiry}</div>
        </div>

        <div style={{ textAlign: 'right' }}>
           <div style={styles.label}>Balance</div>
           <div style={styles.value}>${balance.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

// 2. Parent Component
const App = () => {
  // Styles for the background page to make the card pop
  
  const pageStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebf1f5'
  };

  return (
    <div style={pageStyle}>
      {/* We pass data DOWN via Props. No state involved. */}
      <CreditCard 
        cardHolder="Sahil Gharte"
        cardNumber="4582991023948821"
        expiry="12/28"
        brand="VISA"
        balance={12500.50}
      />
    </div>
  );
};

const numberRandom = <h1> {Math.random()}</h1>;





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);