import RestaurantCards from "./RestaurantCard";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Shimmer from "./Shimmer";

const Body = () => {
    // 1. Master Data State (Keeps the original copy)
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    
    // 2. Filtered Data State (What is shown on UI)
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
    const [searchText, setSearchText] = useState("");




// ⚡ DEBOUNCING LOGIC ⚡
    useEffect(() => {
        // 1. Set a timer to filter data after 300ms
        const timer = setTimeout(() => {
            console.log("Filtering for: " + searchText);

            const searchResult = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
                res.info.cuisines.join(" ").toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(searchResult);

        }, 300); // 300 milliseconds delay

        // 2. The Cleanup Function
        // This runs if 'searchText' changes BEFORE the 300ms are up.
        // It kills the previous timer so it never fires.
        return () => {
            clearTimeout(timer);
        };

    }, [searchText]); // Runs every time searchText changes

        // ✅ FIXED: Added dependency array []
    useEffect(() => {
        fetchApiData();
    }, []);





    const fetchApiData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();

            // Optional Chaining to be safe
            const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            
            // update BOTH states initially
            setListOfRestaurants(restaurants);
            setFilteredRestaurants(restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    

    // The code below this block won't run until data arrives. 
    // if (listOfRestaurants.length === 0) {
    //     // return <Spinner />;
    //     return (
    //     <div className="shimmer-body">
    //     <Shimmer />
    //     <Shimmer />
    //     <Shimmer />
    //     <Shimmer />
    //     <Shimmer />
    //     <Shimmer />
    //     <Shimmer />
    //     <Shimmer />
    
    //     </div>
    // );
    // }

    return listOfRestaurants.length === 0 ? (
        <div className="shimmer-body">

            {
            Array(8).fill("").map((e, index) => (
                <Shimmer key={index} />
            ))
            }

        </div>
    ):  (
        <div className='body'>
            <div className='body-filters'>
                <div className='filter-bar'>
                    <button type="button" onClick={() => {
                        // Filter from the MASTER copy (listOfRestaurants)
                        const filtered = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.3
                        );
                        setFilteredRestaurants(filtered);
                    }}>
                        Filter: Top Rated
                    </button>

                    <button style={{ marginLeft: "8px" }} type="button" onClick={() => {
                        // Reset: Copy Master data back to Filtered data
                        setFilteredRestaurants(listOfRestaurants);
                        setSearchText("");
                    }}>
                        Reset Filter
                    </button>
                </div>

                <div className='search-bar'>
                    <input 
                        value={searchText} 
                        type="text" 
                        placeholder='Search for restaurants...' 
                        onChange={(e) => { 
                            console.log(e.target.value);
                            setSearchText(e.target.value) }} 
                    />
                    {/* <button type="button" onClick={() => {
                        // Filter from the MASTER copy (listOfRestaurants)
                        const searchResult = listOfRestaurants.filter((res) => 
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()) || 
                            res.info.cuisines.join(" ").toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(searchResult);
                    }}>
                        Search
                    </button> */}
                </div>
            </div>

            <div className='restaurant-cards'>
                {/* Always map the FILTERED state */}
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCards key={restaurant.info.id} restaurant={restaurant.info} />
                ))}
            </div>
        </div>
    )
}

export default Body;