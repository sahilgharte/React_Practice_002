import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "./constants";

const useRestaurantMenu = (restaurantId) => {


  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    const data = fetchMenuData(restaurantId);
    console.log("Menu Data restaurantInfo --> :", restaurantInfo);
  }, []);


  const fetchMenuData = async (restaurantId) => {
    try {
      const response = await fetch(RESTAURANT_MENU_API + restaurantId);
      const jsonData = await response.json();

      console.log(
        "------------>",
        jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card
          .card.itemCards
      );

      setRestaurantInfo(
        jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card
          .card.itemCards
      );
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };



  return restaurantInfo;
};

export default useRestaurantMenu;
