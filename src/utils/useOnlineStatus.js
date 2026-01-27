import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // 1. Create local state to track status
  const [onlineStatus, setOnlineStatus] = useState(true);

  // 2. Add Event Listeners once (on mount)
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // 3. Return the status (boolean)
  return onlineStatus;
};

export default useOnlineStatus;