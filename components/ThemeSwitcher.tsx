import { useTheme } from '../context/ThemeContext'
import { themes } from '../styles/themes'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  return (
    <select
      className="rounded bg-background border border-secondary text-text-main px-2 py-1"
      value={theme}
      onChange={e => setTheme(e.target.value as keyof typeof themes)}
    >
      {Object.entries(themes).map(([key, val]) => (
        <option key={key} value={key} className="bg-background">
          {val.label}
        </option>
      ))}
    </select>
  )
}
