import RestaurantCards from "./RestaurantCard";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Shimmer from "./Shimmer";
import {Link, useRouteError} from 'react-router';
import useRestaurantList from "../utils/useRestaurantList";
import useDebounce from "../utils/useDebounce";

const Body = () => {

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");
    const loadMoreData = 20;


    // Error Handling - Will only be triggered if there's an error in routing to this component
    const error = useRouteError();
    console.log("Body Error Message:", error);
    // You can also render an error message or component based on this error state


    const listOfRestaurants = useRestaurantList();
    // filteredRestaurants = listOfRestaurants;

    console.log("listOfRestaurants -----> ", listOfRestaurants)

    const debouncedSearchText = useDebounce(searchText, 300);

    // 2. Sync Initial Data
    useEffect(() => {
        if (listOfRestaurants.length > 0) {
            setFilteredRestaurants(listOfRestaurants);
        }
    }, [listOfRestaurants]);

    // 3. Filtering Logic (Now triggered by the debounced value)
    useEffect(() => {
        // Only run if we have data
        if (listOfRestaurants.length === 0) return;

        console.log("Filtering for:", debouncedSearchText);

        if (debouncedSearchText !== "") {
            const searchResult = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(debouncedSearchText.toLowerCase()) ||
                res.info.cuisines.join(" ").toLowerCase().includes(debouncedSearchText.toLowerCase())
            );
            setFilteredRestaurants(searchResult);
        } else {
            // If search box is cleared, reset to full list
            setFilteredRestaurants(listOfRestaurants);
        }

    }, [debouncedSearchText, listOfRestaurants]); // 👈 Logic depends on the Debounced Text


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