import React from 'react';
import { IMAGE_CDN_URL, DUMMY_IMAGE_URL } from "../utils/constants";

const RestaurantCards = (props) => {
    const { 
        name, 
        cloudinaryImageId, 
        cuisines, 
        avgRating, 
        sla, 
        costForTwo 
    } = props?.restaurant || {}; 

    const imageUrl = IMAGE_CDN_URL + cloudinaryImageId;

    const handleImageError = (e) => {
        e.target.onerror = null; 
        e.target.src = DUMMY_IMAGE_URL; 
    };

    // 🔴 FIX: Removed 'm-4' and 'w-[250px]'
    // 🟢 ADDED: 'w-full' (Fills the grid cell)
    return (
        <div className='p-4 w-full bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300'>
            
            <div className='relative w-full h-40 mb-3'>
                <img 
                    className='w-full h-full object-cover rounded-lg'
                    src={imageUrl} 
                    onError={handleImageError}
                    alt={name} 
                />
                
                <div className='absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-10 rounded-b-lg opacity-60'></div>
                <div className='absolute bottom-1 left-2 text-white font-bold text-xs drop-shadow-md'>
                    {costForTwo}
                </div>
            </div>
            
            <div className='flex flex-col gap-1'>
                <h3 className='font-bold text-lg text-gray-800 truncate'>{name}</h3>
                <div className='flex items-center gap-2 text-sm font-semibold'>
                    <span className={`px-1 py-[2px] rounded text-white text-xs ${avgRating >= 4 ? 'bg-green-600' : 'bg-orange-500'}`}>
                        ★ {avgRating}
                    </span>
                    <span className='text-gray-600'>•</span>
                    <span className='text-gray-700'>{sla?.deliveryTime} mins</span>
                </div>
                <p className='text-gray-500 text-sm truncate'>{cuisines?.join(", ")}</p>
            </div>
        </div>
    )
}

export default RestaurantCards;