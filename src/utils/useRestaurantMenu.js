import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, [restaurantId]); // ✅ Dependency added

  const fetchMenuData = async () => {
    try {
      // ✅ Added Proxy to avoid CORS errors
      const response = await fetch(RESTAURANT_MENU_API + restaurantId);
      const json = await response.json();

      console.log("Full Menu API JSON:", json);

      // ✅ Store the ROOT data. Let the component decide what to pick.
      setResInfo(json.data);
      
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;