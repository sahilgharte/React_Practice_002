import { useState, useEffect } from "react";
import {RESTAURANT_LIST_API} from "./constants"

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    try {
      const data = await fetch("https://corsproxy.io/?"+RESTAURANT_LIST_API);
      const json = await data?.json();

      console.log(json)

      // Optional Chaining to be safe
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      console.log("Fetched Data: from useRestaurantList", restaurants);

      // update BOTH states initially
      setListOfRestaurants(restaurants);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return listOfRestaurants;
};

export default useRestaurantList;
