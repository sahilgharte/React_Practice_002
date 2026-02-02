import { useParams } from "react-router"; // ✅ Fixed Import
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { restaurantId } = useParams();
    const restaurantMenu = useRestaurantMenu(restaurantId);

    // 1. Loading State
    if (restaurantMenu === null) {
        return (
            <div className="max-w-4xl mx-auto mt-10 flex flex-col gap-4">
                {Array(6).fill("").map((_, index) => (
                    <Shimmer key={index} />
                ))}
            </div>
        );
    }

    // 2. Empty State (Logic loaded, but no items found)
    if (restaurantMenu.length === 0) {
        return (
            <div className="text-center mt-20">
                <h1 className="text-2xl font-bold text-gray-600">No Menu Items found.</h1>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto mt-8 mb-16 px-4">
            
            {/* --- Header Section --- */}
            <div className="text-center mb-10 pb-6 border-b border-gray-300 border-dashed">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
                    Restaurant Menu
                </h1>
                <p className="text-gray-500 text-lg">
                    Discover the best food & drinks from our kitchen 🍴
                </p>
            </div>

            {/* --- Menu Items List --- */}
            <div className="flex flex-col gap-4">
                {restaurantMenu.map((item) => {
                    // Extract data for cleaner code
                    const { id, name, description, price, defaultPrice } = item.card.info;
                    
                    return (
                        <div 
                            key={id} 
                            className="flex justify-between items-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                            {/* Left Side: Text Info */}
                            <div className="w-9/12">
                                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                                    {name}
                                </h3>
                                <p className="font-semibold text-gray-700 text-sm mb-2">
                                    ₹ {(price || defaultPrice) / 100}
                                </p>
                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                    {description || "No description available for this delicious item."}
                                </p>
                            </div>

                            {/* Right Side: Add Button (Placeholder for Cart Logic) */}
                            <div className="w-3/12 flex flex-col items-center justify-center relative">
                                {/* If you had images, they would go here. For now, a clean Add button. */}
                                <button className="px-6 py-2 bg-white text-green-600 font-bold border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 active:scale-95 transition-all">
                                    ADD +
                                </button>
                                <p className="text-xs text-gray-400 mt-2">Customizable</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default RestaurantMenu;