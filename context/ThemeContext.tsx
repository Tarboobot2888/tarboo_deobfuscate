import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { themes, ThemeName } from '../styles/themes'

interface ThemeCtx {
  theme: ThemeName
  setTheme: (t: ThemeName) => void
}

const ThemeContext = createContext<ThemeCtx>({
  theme: 'cyberpunk',
  setTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>('cyberpunk')

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as ThemeName) || 'cyberpunk'
    if (themes[saved]) setThemeState(saved)
  }, [])

  useEffect(() => {
    document.body.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeState }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
