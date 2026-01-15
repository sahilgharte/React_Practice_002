import React from 'react';
import { Link, useParams } from "react-router"; // 1. Change 'react-router' to 'react-router-dom'
import { IMAGE_CDN_URL, DUMMY_IMAGE_URL } from "../utils/constants";

const RestaurantCards = (props) => {
    // 3. Safety Check: If restaurant data is missing, don't crash.
    // We add '|| {}' so destructuring doesn't fail on undefined.
    const { 
        id, 
        name, 
        cloudinaryImageId, 
        cuisines, 
        avgRating, 
        sla, 
        costForTwo 
    } = props?.restaurant || {}; 

    const imageUrl = IMAGE_CDN_URL + cloudinaryImageId;


    // ⚡ The Image Error Logic (Perfectly implemented)
    const handleImageError = (e) => {
        e.target.onerror = "fwefwef"; // Prevents infinite loop if default img is also broken
        e.target.src = DUMMY_IMAGE_URL; // Replaces broken link with Default Image
    };

    return (
        // 4. Use dynamic ID in the Link
        <div className='restaurant-card-container'>
            <div className='restaurant-card-content'>
                <div className='restaurant-image'>
                    {/* The onError handler is attached here */}
                    <img 
                        src={imageUrl} 
                        onError={handleImageError}
                        alt={name} 
                    />
                </div>
                
                <div className='restaurant-card-footer'>
                    <div className='restaurant-name'>{name}</div>
                    {/* 5. Safety check for cuisines array */}
                    <div className='restaurant-cuisine'>{cuisines?.join(", ")}</div>

                    <div className='restaurant-details'>
                        <div className='restaurant-rating'>{avgRating} ⭐️</div>
                        <div className='restaurant-delivery-time'>{sla?.deliveryTime} mins 🚚</div>
                    </div>

                    <div className='restaurant-cost-for-two'>{costForTwo} 💵</div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCards;