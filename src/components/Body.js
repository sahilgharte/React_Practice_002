import RestaurantCards from "./RestaurantCard";
import { restaurantList } from "../utils.s/mockData";
import { useState } from "react";

// let filteredRestaurants = restaurantList;



const Body = () => {

            let [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);
            let [searchText, setSearchText] = useState("");

    return (

        <div className='body'>

            <div className='body-filters'>


                <div className='filter-bar'>
                    <button type="button" onClick={() => {
                        filteredRestaurants = restaurantList.filter(
                            restaurant => restaurant.info.avgRating > 4.3
                        );
                        setFilteredRestaurants(filteredRestaurants);
                        console.log(filteredRestaurants);
                    }} >Filter: Top Rated</button>

                    <button style={{ marginLeft: "8px" }} type="button"  onClick={() => {
                        filteredRestaurants = restaurantList.filter(() => restaurantList);
                        setFilteredRestaurants(filteredRestaurants);
                    
                        setSearchText("");
                    }} >Reset Filter</button>

                </div>


                <div className='search-bar'>
                    <input value={searchText} type="text" placeholder='Search for restaurants, cuisines or a dish' onChange={(e) => setSearchText(e.target.value)  } />
                    <button type="button" onClick={() => {
                        filteredRestaurants = restaurantList.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) || restaurant.info.cuisines.join(" ").toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurants);
                        console.log(setSearchText);
                    }}>Search</button>
                </div>


            </div>

            <div className='restaurant-cards'>
                {filteredRestaurants.map(restaurant => (
                    <RestaurantCards key={restaurant.info.id} restaurant={restaurant.info} />
                ))}
            </div>
        </div>
    )
}

export default Body;