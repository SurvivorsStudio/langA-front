// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean
  data: T
  message?: string
  error?: string
}

// User types
export interface User {
  id: string
  email: string
  name: string
  createdAt: string
  updatedAt: string
}

// Common types
export interface PaginationParams {
  page: number
  limit: number
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Component props types
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

// Error types
export interface ApiError {
  message: string
  status: number
  code?: string
}
