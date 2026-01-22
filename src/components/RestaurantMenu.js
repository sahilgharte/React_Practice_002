import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Spinner from "./Spinner";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu = (props) => {

    // const [restaurantMenu, setRestaurantMenu] = useState(null);
    const {restaurantId} = useParams();
    console.log(restaurantId)

      const restaurantMenu = useRestaurantMenu(restaurantId);

      console.log("restaurantMenu --> ", restaurantMenu)


    if(restaurantMenu === null) {
        return (
            <div className="restaurant-menu-shimmer">
                <Shimmer />
            </div>
        )
    }


return (
        <div className="restaurant-menu-container">

            <div className="restaurant-menu-header">
                <h1 className="restaurant-menu-title">Restaurant Menu</h1>
                <p>Welcome to our restaurant! Here is our menu:</p>
            </div>

        

            <div className="restaurant-menu-items">
                {restaurantMenu.map((item) => (
                    <div key={item.card.info.id} className="restaurant-menu-item">
                        <h3 className="menu-item-name">{item.card.info.name}</h3>
                        <p className="menu-item-description">{item.card.info.description}</p>
                        <p className="menu-item-price">Price: ₹{item.card.info.price / 100}</p>
                    </div>
                ))}
                
            </div>
        </div>
    );
}

export default RestaurantMenu;