import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';

// importing components
import Header from './components/Header.js';
// import Body from './components/Body.js';
import Footer from './components/Footer.js';
// import About from './components/About.js';
// import Contact from './components/Contact.js';
import RestaurantMenu from './components/RestaurantMenu.js';
import Error from './components/Error.js';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import Shimmer from './components/Shimmer.js';
import Spinner from './components/Spinner.js';
// import Grocery from './components/Grocery.js';

// Lazy Loading || On-Demand loading || etc.
// lazy comes from react package and it is a named package.
const Grocery = lazy(() => import("./components/Grocery.js"));
const About = lazy(() => import("./components/About.js"));
const Contact = lazy(() => import("./components/Contact.js"));
const Body = lazy(() => import("./components/Body.js"));



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
                element: <Suspense fallback={<Shimmer/>}><About information = {"From App.JS as props"} />,</Suspense>
            },
            {
                path: "/contact",
                element: <Suspense fallback={<Shimmer/>} ><Contact /></Suspense>,
            },
            {
                path: "/",
                element: <Suspense fallback={<Shimmer />}>
                    <Body /> </Suspense>,
            },
            {
                path: "/menu/:restaurantId",
                element: <Suspense fallback={<Shimmer/>}><RestaurantMenu /></Suspense>,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Spinner/>}><Grocery /></Suspense>,
            }
        ]
    },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);