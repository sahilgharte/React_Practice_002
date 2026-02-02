import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  // 1. Get the FULL data from the hook
  const resInfo = useRestaurantMenu(restaurantId);

  // 2. Loading State (Show Shimmer while fetching)
  if (resInfo === null) return <Shimmer />;

  // 3. Extract Restaurant Info (Header Data)
  // Note: Swiggy sometimes shifts cards. If this fails, check console for the index.
  const { 
    name, 
    cuisines, 
    costForTwoMessage, 
    avgRating, 
    sla 
  } = resInfo?.cards[2]?.card?.card?.info || {};

  console.log(resInfo);

  // 4. Extract Menu Items (Body Data)
  // This path looks deep, but it's the standard Swiggy Menu structure.
  const itemCards = 
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

  console.log("Menu Items:", itemCards);

  return (
    <div className="max-w-4xl mx-auto mt-8 mb-16 px-4">
      
      {/* --- HEADER (Restaurant Details) --- */}
      <div className="text-center mb-10 pb-6 border-b border-gray-300 border-dashed">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 font-sans">
          {name}
        </h1>
        
        <div className="flex justify-center items-center gap-3 text-lg text-gray-600 font-medium">
          <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-lg text-sm">
             ★ {avgRating}
          </span>
          <span>•</span>
          <span>{sla?.slaString}</span>
          <span>•</span>
          <span>{costForTwoMessage}</span>
        </div>
        
        <p className="text-gray-400 mt-3 text-sm tracking-wide uppercase">
            {cuisines?.join(", ")}
        </p>
      </div>

      {/* --- BODY (Menu List) --- */}
      <div className="flex flex-col gap-6">
        {itemCards.length === 0 ? (
           <h2 className="text-center text-xl font-bold text-gray-500">
             Menu not found (API structure might have changed)
           </h2>
        ) : (
           itemCards.map((item) => {
            const { id, name, description, price, defaultPrice, imageId } = item.card.info;
            
            return (
              <div 
                key={id} 
                className="flex justify-between items-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Left: Text */}
                <div className="w-9/12 pr-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                    {name}
                  </h3>
                  <p className="font-semibold text-gray-700 text-base mb-2">
                    ₹ {(price || defaultPrice) / 100}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {description}
                  </p>
                </div>

                {/* Right: Button & Image */}
                <div className="w-3/12 flex flex-col items-center relative">
                   {/* Add Button */}
                   <button className="px-8 py-2 bg-white text-green-600 font-bold border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 active:scale-95 transition-all uppercase text-sm">
                      ADD
                   </button>
                   <span className="text-[10px] text-gray-400 mt-2">Customizable</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;