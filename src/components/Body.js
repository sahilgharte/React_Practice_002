import RestaurantCards from "./RestaurantCard";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Shimmer from "./Shimmer";
import {Link, useRouteError} from 'react-router';

const Body = () => {
    // 1. Master Data State (Keeps the original copy)
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    // 2. Filtered Data State (What is shown on UI)
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");
    const loadMoreData = 20;

    // Error Handling - Will only be triggered if there's an error in routing to this component
    const error = useRouteError();
    console.log("Body Error Message:", error);
    // You can also render an error message or component based on this error state



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

    useEffect(() => {

    }, []);





    const fetchApiData = async () => {
        try {
            const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
            const json = await data.json();

            console.log("Fetched Data:", json);

            // Optional Chaining to be safe
            const restaurants = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            // update BOTH states initially
            setListOfRestaurants(restaurants);
            setFilteredRestaurants(restaurants);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    }

    const fetchMoreRestaurants = async () => {
        // 1. The Payload (Your JSON Data)
        // Note: specific values like 'nextOffset' usually change with every page load.
        const payload = {
            lat: 20.0395516,
            lng: 73.8040126,
            nextOffset: "CJhlELQ4KICQsIya2PjFDTCnEzgB", // ⚠️ This changes for Page 2, Page 3, etc.
            widgetOffset: {
                NewListingView_category_bar_chicletranking_TwoRows: "",
                NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
                Restaurant_Group_WebView_PB_Theme: "",
                collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "39",
                inlineFacetFilter: "",
                restaurantCountWidget: ""
            },
            filters: {},
            seoParams: {
                seoUrl: "https://www.swiggy.com/restaurants",
                pageType: "FOOD_HOMEPAGE",
                apiName: "FoodHomePage",
                businessLine: "FOOD"
            },
            page_type: "DESKTOP_WEB_LISTING",
            _csrf: "uNIMAA10aQ9q-xs6F3GrpiUbQ49mKN4L6wczYEVM" // ⚠️ This might expire!
        };

        try {
            // 2. The Fetch Call
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/update", {
                method: "POST", // ⚡ Important: Swiggy's Update API uses POST
                headers: {
                    "Content-Type": "application/json",
                    // You might need extra headers like User-Agent if it fails
                },
                body: JSON.stringify(payload), // ⚡ Convert Object -> String
            });

            const data = await response.json();
            console.log("Updated Data:", data);

            // 3. Logic to append new restaurants to your existing list
            // setListOfRestaurants((prev) => [...prev, ...newData]);

        } catch (error) {
            console.error("Error fetching more restaurants:", error);
        }
    };


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
    ) : (
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

                            setSearchText(e.target.value)
                        }}
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
                    <Link  key={restaurant.info.id} to={"/menu/"+restaurant.info.id}>
                        <RestaurantCards restaurant={restaurant.info} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;