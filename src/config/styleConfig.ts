
// Configuration file for adjusting sizes, padding, and other style variables

// General sizing
export const sizing = {
  // Component sizes
  componentHeight: {
    sm: "h-32",
    md: "h-40",
    lg: "h-48",
  },
  componentWidth: {
    sm: "w-32",
    md: "w-40",
    lg: "w-48",
  },
  
  // Padding scales
  padding: {
    xs: "p-1",
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
    xl: "p-6",
  },
  paddingX: {
    xs: "px-1",
    sm: "px-2",
    md: "px-3",
    lg: "px-4",
    xl: "px-6",
  },
  paddingY: {
    xs: "py-1",
    sm: "py-2",
    md: "py-3",
    lg: "py-4",
    xl: "py-6",
  },
  
  // Margin scales
  margin: {
    xs: "m-1",
    sm: "m-2",
    md: "m-3",
    lg: "m-4",
    xl: "m-6",
  },
  marginX: {
    xs: "mx-1",
    sm: "mx-2",
    md: "mx-3",
    lg: "mx-4",
    xl: "mx-6",
  },
  marginY: {
    xs: "my-1",
    sm: "my-2",
    md: "my-3",
    lg: "my-4",
    xl: "my-6",
  },
  
  // Border radius
  borderRadius: {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  },
  
  // Icon sizes
  iconSize: {
    xs: 14,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
  },
  
  // Font sizes
  fontSize: {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  },
};

// Animation durations
export const animationDurations = {
  fast: "duration-300",
  medium: "duration-500",
  slow: "duration-700",
  verySlow: "duration-1000",
};

// Colors
export const colors = {
  primary: "primary",
  secondary: "secondary",
  success: "green-500",
  warning: "amber-500",
  danger: "red-500",
  info: "blue-500",
  muted: "gray-400",
  light: "gray-100",
};

// Quality indicators - these will be used to show improvement as more testing services are used
export const qualityIndicators = {
  stability: {
    low: 30,
    medium: 60,
    high: 90,
  },
  speed: {
    low: 25,
    medium: 65,
    high: 95,
  },
  reliability: {
    low: 35,
    medium: 70,
    high: 95,
  },
};
