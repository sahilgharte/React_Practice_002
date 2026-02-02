import RestaurantCards from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link, useRouteError } from 'react-router'; // ✅ Fixed import
import useRestaurantList from "../utils/useRestaurantList";
import useDebounce from "../utils/useDebounce";

const Body = () => {
    // 1. State & Hooks
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const error = useRouteError();
    const listOfRestaurants = useRestaurantList();
    const debouncedSearchText = useDebounce(searchText, 300);

    // 2. Sync Data
    useEffect(() => {
        if (listOfRestaurants.length > 0) {
            setFilteredRestaurants(listOfRestaurants);
        }
    }, [listOfRestaurants]);

    // 3. Filter Logic
    useEffect(() => {
        if (listOfRestaurants.length === 0) return;

        if (debouncedSearchText !== "") {
            const searchResult = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(debouncedSearchText.toLowerCase()) ||
                res.info.cuisines.join(" ").toLowerCase().includes(debouncedSearchText.toLowerCase())
            );
            setFilteredRestaurants(searchResult);
        } else {
            setFilteredRestaurants(listOfRestaurants);
        }
    }, [debouncedSearchText, listOfRestaurants]);


    // 4. Loading State (Shimmer)
    if (listOfRestaurants.length === 0) {
        return (
            <div className="flex flex-wrap justify-center gap-6 mt-10">
                {Array(10).fill("").map((e, index) => (
                    <Shimmer key={index} />
                ))}
            </div>
        );
    }

    return (
        <div className='body w-11/12 mx-auto mt-8 mb-10'>
            
            {/* --- Filter & Search Section --- */}
            <div className='flex flex-col md:flex-row justify-between items-center mb-8 p-4 bg-gray-50 rounded-lg shadow-sm'>
                
                {/* Search Input */}
                <div className='w-full md:w-1/3 mb-4 md:mb-0 relative'>
                    <input
                        value={searchText}
                        type="text"
                        placeholder='Search for restaurants...'
                        className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <span className="absolute right-4 top-3 text-gray-400">🔍</span>
                </div>

                {/* Filter Buttons */}
                <div className='flex gap-4'>
                    <button 
                        className="px-6 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 shadow-sm" 
                        type="button" 
                        onClick={() => {
                            const filtered = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4.3
                            );
                            setFilteredRestaurants(filtered);
                        }}
                    >
                        ⭐ Top Rated
                    </button>

                    <button 
                        className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors text-sm font-medium shadow-md" 
                        type="button" 
                        onClick={() => {
                            setFilteredRestaurants(listOfRestaurants);
                            setSearchText("");
                        }}
                    >
                        Reset
                    </button>
                </div>
            </div>

            {/* --- Restaurant Cards Grid --- */}
            {filteredRestaurants.length === 0 ? (
                <div className="text-center mt-20 text-gray-500">
                    <h2 className="text-2xl font-bold">No Restaurants found</h2>
                    <p>Try searching for something else.</p>
                </div>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {filteredRestaurants.map((restaurant) => (
                        <Link 
                            key={restaurant.info.id} 
                            to={"/menu/" + restaurant.info.id}
                            className="transform hover:scale-95 transition-transform duration-200"
                        >
                            <RestaurantCards restaurant={restaurant.info} />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Body;