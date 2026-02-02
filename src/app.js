import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'; // ✅ Fixed Import path

// --- Component Imports ---
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Error from './components/Error.js';
import RestaurantMenu from './components/RestaurantMenu.js';
import Shimmer from './components/Shimmer.js';
import Spinner from './components/Spinner.js';

// --- Lazy Loading Imports ---
const Grocery = lazy(() => import("./components/Grocery.js"));
const About = lazy(() => import("./components/About.js"));
const Contact = lazy(() => import("./components/Contact.js"));
const Body = lazy(() => import("./components/Body.js"));

// --- App Layout Component ---
const AppLayout = () => {
    return (
        // 1. min-h-screen: Ensures app takes full height
        // 2. flex-col: Stacks Header, Body, Footer vertically
        // 3. bg-gray-50: Sets a light background for the whole app
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900">
            
            <Header />
            
            {/* flex-grow: Pushes the Footer to the bottom */}
            <main className="flex-grow">
                <Outlet />
            </main>
            
            <Footer />
        </div>
    )
}

// --- Routing Configuration ---
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<div className="mt-20 flex justify-center"><Shimmer /></div>}>
                        <Body />
                    </Suspense>
                ),
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <About information={"From App.JS as props"} />
                    </Suspense>
                ),
            },
            {
                path: "/contact",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Contact />
                    </Suspense>
                ),
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<div className="mt-20 flex justify-center"><Spinner /></div>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: "/menu/:restaurantId",
                element: (
                    <Suspense fallback={<div className="mt-20 max-w-4xl mx-auto"><Shimmer /></div>}>
                        <RestaurantMenu />
                    </Suspense>
                ),
            },
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);