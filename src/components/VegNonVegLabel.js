// Higher Order Component for Veg/Non-Veg Label

const withVegLabel = (RestaurantCard) => {
    return (props) => {
        // 1. Extract data safely
        // Note: Ensure your API data path is correct (e.g., props.restaurant.info.veg or props.restaurant.veg)
        const isVeg = props.restaurant?.info?.veg || props.restaurant?.veg;

        return (
            <div className='relative group'>
                {/* 2. The Label (Absolute Positioned on top of card) */}
                <div className="absolute top-3 left-3 flex items-center gap-1 z-10">
                    <div 
                        className={`flex items-center gap-1 px-3 py-1 rounded-md shadow-md backdrop-blur-sm border 
                        ${isVeg 
                            ? 'bg-green-50/90 border-green-500 text-green-700' 
                            : 'bg-red-50/90 border-red-500 text-red-700'
                        }`}
                    >
                        {/* Dot Icon */}
                        <span className={`w-2 h-2 rounded-full ${isVeg ? 'bg-green-600' : 'bg-red-600'}`}></span>
                        
                        {/* Text Label */}
                        <span className="text-[10px] font-bold uppercase tracking-wide">
                            {isVeg ? "Pure Veg" : "Non-Veg"}
                        </span>
                    </div>
                </div>

                {/* 3. The Original Component */}
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default withVegLabel;