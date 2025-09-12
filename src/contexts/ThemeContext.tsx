import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // localStorage에서 테마 설정을 가져오거나 기본값으로 'dark' 사용
    const savedTheme = localStorage.getItem('theme') as Theme
    return savedTheme || 'dark'
  })

  useEffect(() => {
    // 테마가 변경될 때마다 localStorage에 저장
    localStorage.setItem('theme', theme)
    // body 클래스에 테마 적용
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
