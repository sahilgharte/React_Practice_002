import {IMAGE_CDN_URL} from "../utils.s/constants";

const RestaurantCards = (props) => {

    const {name, cloudinaryImageId, cuisines, avgRating, sla, costForTwo} = props?.restaurant;
    const imageUrl = IMAGE_CDN_URL + cloudinaryImageId;

    return (
        <div className='restaurant-card-container'>
            <div className='restaurant-card-content'>
                <div className='restaurant-image'>
                    <img src={imageUrl} alt="restaurant" />
                </div>
                <div className='restaurant-card-footer'>
                    <div className='restaurant-name'>{name}</div>
                    <div className='restaurant-cuisine'>{cuisines.join(", ")}</div>

                    <div className='restaurant-details'>
                        <div className='restaurant-rating'>{avgRating} ⭐️</div>
                    <div className='restaurant-delivery-time'>{sla.deliveryTime} mins 🚚</div>
                    </div>

                    <div className='restaurant-cost-for-two'>{costForTwo} 💵</div>
                </div>
            </div>
        </div>
    )
}
export default RestaurantCards;