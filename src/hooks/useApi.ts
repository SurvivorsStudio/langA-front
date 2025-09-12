import { useState, useEffect, useCallback } from 'react'
import { ApiError } from '@/types'

interface UseApiState<T> {
  data: T | null
  loading: boolean
  error: ApiError | null
}

interface UseApiOptions {
  immediate?: boolean
}

export function useApi<T = unknown>(
  apiCall: () => Promise<T>,
  options: UseApiOptions = {}
) {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  })

  const execute = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }))
    
    try {
      const data = await apiCall()
      setState({ data, loading: false, error: null })
      return data
    } catch (error) {
      const apiError = error as ApiError
      setState({ data: null, loading: false, error: apiError })
      throw apiError
    }
  }, [apiCall])

  useEffect(() => {
    if (options.immediate !== false) {
      execute()
    }
  }, [execute, options.immediate])

  return {
    ...state,
    execute,
    refetch: execute,
  }
}

export default useApi
