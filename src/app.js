import React from 'react';
import ReactDOM from 'react-dom/client';

// importing components
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';



// Inline Style Object for Restaurant Card Container
// const RestaurantCardContainerStyle = {
//     display: 'inline-block',
//     border: '1px solid #ccc',
//     borderRadius: '10px',
//     padding: '15px',
//     transition: 'transform 0.3s, box-shadow 0.3s',
//     margin: '10px',

// } 


// App Layout Component - Parent Component - would have 3 components header, body, footer.
const AppLayout = () => {
    return (
        <div className='app-container'>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);