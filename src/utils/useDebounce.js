import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  // 1. State to hold the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 2. Set a timer to update the state after 'delay'
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // 3. Cleanup: If the user types again, kill the previous timer
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Re-run effect if value or delay changes

  // 4. Return the "safe" value
  return debouncedValue;
};

export default useDebounce;