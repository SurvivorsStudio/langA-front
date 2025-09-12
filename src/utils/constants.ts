// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  USERS: {
    PROFILE: '/users/profile',
    UPDATE: '/users/update',
  },
} as const

// Local storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER_DATA: 'userData',
  THEME: 'theme',
} as const

// App configuration
export const APP_CONFIG = {
  NAME: import.meta.env.VITE_APP_NAME || 'LangA Frontend',
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
  NODE_ENV: import.meta.env.VITE_NODE_ENV || 'development',
} as const

// Pagination defaults
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const
