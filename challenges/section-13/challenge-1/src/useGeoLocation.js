import { useEffect, useState } from "react";

export function useGeolocation(countClicks) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  useEffect(function() {
    if(countClicks === 0) return;
    if (!navigator.geolocation)
        return setError("Your browser does not support geolocation");
    
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
          setIsLoading(false);
        },
        (error) => {
          setError(error.message);
          setIsLoading(false);
        }
      );
  }, [countClicks])



  return [isLoading, position, error]
}
