export const colors = {
  // Base colors
  white: '#FFFFFF',
  black: '#000000',
  
  // Dark theme
  dark: {
    background: '#0a0a0a',
    surface: '#1a1a1a',
    surfaceElevated: '#2a2a2a',
    border: '#333333',
    borderLight: '#2a2a2a',
    text: {
      primary: '#ffffff',
      secondary: '#a0a0a0',
      tertiary: '#666666',
      disabled: '#4a4a4a',
    },
  },
  
  // Light theme
  light: {
    background: '#ffffff',
    surface: '#f8f8f8',
    surfaceElevated: '#ffffff',
    border: '#e5e5e5',
    borderLight: '#f0f0f0',
    text: {
      primary: '#0a0a0a',
      secondary: '#666666',
      tertiary: '#999999',
      disabled: '#cccccc',
    },
  },
  
  // Semantic colors
  primary: '#ff6b6b',      // Coral/Salmon accent
  primaryHover: '#ff5252',
  primaryActive: '#ff3838',
  
  success: '#4ade80',      // Green
  successBg: '#166534',
  
  error: '#f87171',        // Red
  errorBg: '#991b1b',
  
  warning: '#fbbf24',      // Yellow
  warningBg: '#92400e',
  
  info: '#60a5fa',         // Blue
  infoBg: '#1e3a8a',
  
  // Chart colors
  chart: {
    blue: '#3b82f6',
    green: '#10b981',
    red: '#ef4444',
    yellow: '#f59e0b',
    purple: '#8b5cf6',
    pink: '#ec4899',
    indigo: '#6366f1',
    cyan: '#06b6d4',
  },
  
  // Category colors (for budgets/expenses)
  categories: {
    food: '#f59e0b',
    transport: '#3b82f6',
    shopping: '#ec4899',
    entertainment: '#8b5cf6',
    health: '#10b981',
    bills: '#ef4444',
    other: '#6b7280',
  },
};

export type ColorScheme = 'light' | 'dark';
