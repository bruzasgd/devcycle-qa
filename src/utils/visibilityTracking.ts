
// Map service IDs to their order number
const serviceOrder: Record<string, number> = {
  'ai-agents': 1,
  'ai-testing': 2,
  'cicd-integration': 3,
  'e2e-testing': 4,
  'visual-qa': 5,
  'quality-analytics': 6,
  'performance-qa': 7,
  'automation-migration': 8,
  'qa-strategy': 9,
  'managed-qa': 10,
};

/**
 * Tracks which services are visible on the screen
 * @param isVisible Whether the service is visible
 * @param serviceId The ID of the service
 * @param setVisibleServices State setter for visible services
 */
export const trackServiceVisibility = (
  isVisible: boolean, 
  serviceId: string,
  setVisibleServices: React.Dispatch<React.SetStateAction<number>>
) => {
  if (isVisible) {
    const serviceNumber = serviceOrder[serviceId] || 0;
    setVisibleServices(prev => Math.max(prev, serviceNumber));
  }
};
