export const lightTheme = {
  colors: {
    primary: '#8b5cf6',
    primaryHover: '#7c3aed',
    secondary: '#a855f7',
    secondaryHover: '#9333ea',
    background: '#ffffff',
    surface: '#f8fafc',
    surfaceHover: '#f1f5f9',
    border: '#e2e8f0',
    borderHover: '#cbd5e1',
    text: '#1e293b',
    textSecondary: '#64748b',
    textMuted: '#94a3b8',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    white: '#ffffff',
    black: '#000000',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #6b25da, #8b5cf6)',
    primaryHover: 'linear-gradient(135deg, #8b5cf6, #6b25da)',
    hero: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
  },
  shadows: {
    card: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    cardHover: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  }
}

export const darkTheme = {
  colors: {
    primary: '#8b5cf6',
    primaryHover: '#7c3aed',
    secondary: '#a855f7',
    secondaryHover: '#9333ea',
    background: '#0a0a0a',
    surface: '#1a1a1a',
    surfaceHover: '#2a2a2a',
    border: '#333333',
    borderHover: '#4a4a4a',
    text: '#ffffff',
    textSecondary: '#cccccc',
    textMuted: '#666666',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    white: '#ffffff',
    black: '#000000',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #6b25da, #8b5cf6)',
    primaryHover: 'linear-gradient(135deg, #8b5cf6, #6b25da)',
    hero: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
  },
  shadows: {
    card: '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
    cardHover: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
  }
}

export type Theme = typeof lightTheme
