import React from 'react';
import ReactDOM from 'react-dom/client';

// importing components
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import RestaurantMenu from './components/RestaurantMenu.js';
import Error from './components/Error.js';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';


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
            <Outlet />
            {/* <Body /> */}
            <Footer />
        </div>
    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/menu/:restaurantId",
                element: <RestaurantMenu />,
            }
        ]
    },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);