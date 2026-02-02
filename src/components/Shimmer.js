const Shimmer = () => {
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg h-[300px] animate-pulse">
      
      {/* Image Placeholder */}
      <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>

      {/* Text Lines Placeholder */}
      <div className="flex flex-col gap-3">
        {/* Title Bar (Longer) */}
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        
        {/* Subtitle Bar (Shorter) */}
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        
        {/* Rating/Price Bar (Very Short) */}
        <div className="h-4 bg-gray-300 rounded w-1/4 mt-2"></div>
      </div>
      
    </div>
  );
};

export default Shimmer;