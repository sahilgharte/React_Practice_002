const Grocery = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-green-50 to-green-100 p-6">
      
      {/* Icon / Emoji */}
      <div className="text-9xl mb-6 animate-bounce">
        🥦
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4 text-center">
        Grocery Instamart
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-green-600 text-center max-w-2xl font-medium">
        Our grocery online store is coming soon! <br />
        <span className="text-sm text-green-500 mt-2 block">
          (This is a demo component to test Lazy Loading & Code Splitting)
        </span>
      </p>

      {/* Button */}
      <button className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-lg transition-transform hover:-translate-y-1">
        Get Notified 🔔
      </button>

    </div>
  );
};

export default Grocery;