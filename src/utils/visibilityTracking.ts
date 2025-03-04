
/**
 * Tracks which services are visible on the screen
 * @param isVisible Whether the service is visible
 * @param serviceId The ID of the service (e.g., "service-3")
 * @param setVisibleServices State setter for visible services
 */
export const trackServiceVisibility = (
  isVisible: boolean, 
  serviceId: string,
  setVisibleServices: React.Dispatch<React.SetStateAction<number>>
) => {
  if (isVisible) {
    setVisibleServices(prev => {
      // Extract the service number from the ID (e.g., "service-3" gives us 3)
      const serviceNumber = parseInt(serviceId.split('-')[1]);
      // Return the maximum service number seen so far
      return Math.max(prev, serviceNumber);
    });
  }
};
