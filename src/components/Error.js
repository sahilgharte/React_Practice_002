import { useRouteError, Link } from "react-router"; // Added Link for navigation

const Error = () => {
    const err = useRouteError();
    console.error(err); // Good for debugging

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-4">
            
            {/* Error Card */}
            <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg w-full border border-gray-200">
                
                {/* Icon / Emoji */}
                <div className="text-6xl mb-4">
                    😔
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                    Oops!
                </h1>
                <p className="text-lg text-gray-500 mb-6">
                    Something unexpected happened.
                </p>

                {/* Technical Error Details */}
                <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-8">
                    <h2 className="text-2xl font-bold text-red-600">
                        {err.status} : {err.statusText}
                    </h2>
                    <p className="text-red-400 text-sm mt-1 italic">
                        {err.data || "Unknown Error"}
                    </p>
                </div>

                {/* Action Button */}
                <Link 
                    to="/" 
                    className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-md transition-transform transform hover:-translate-y-1 active:scale-95"
                >
                    🏠 Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Error;