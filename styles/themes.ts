import { dracula } from '@uiw/codemirror-theme-dracula'
import { githubLight } from '@uiw/codemirror-theme-github'
import { materialDark } from '@uiw/codemirror-theme-material'
import { okaidia } from '@uiw/codemirror-theme-okaidia'
import { sublime } from '@uiw/codemirror-theme-sublime'
import { xcodeLight } from '@uiw/codemirror-theme-xcode'

export const themes = {
  cyberpunk: {
    label: 'Cyberpunk',
    colors: {
      bg: '#101828',
      primary: '#00E1FF',
      accent: '#FE38A7',
      secondary: '#14FF84',
      text: '#F1F5F9',
    },
    editor: dracula,
  },
  light: {
    label: 'Light Modern',
    colors: {
      bg: '#ffffff',
      primary: '#0ea5e9',
      accent: '#ec4899',
      secondary: '#14b8a6',
      text: '#111827',
    },
    editor: githubLight,
  },
  darkclassic: {
    label: 'Dark Classic',
    colors: {
      bg: '#0f172a',
      primary: '#38bdf8',
      accent: '#f472b6',
      secondary: '#475569',
      text: '#e2e8f0',
    },
    editor: materialDark,
  },
  neumorphic: {
    label: 'Neumorphic',
    colors: {
      bg: '#e0e0e0',
      primary: '#6c63ff',
      accent: '#ff6584',
      secondary: '#a1a1aa',
      text: '#333333',
    },
    editor: xcodeLight,
  },
  minimal: {
    label: 'Minimal',
    colors: {
      bg: '#f5f5f5',
      primary: '#0f172a',
      accent: '#a855f7',
      secondary: '#64748b',
      text: '#111111',
    },
    editor: sublime,
  },
  retro: {
    label: 'Retro Terminal',
    colors: {
      bg: '#000000',
      primary: '#00ff00',
      accent: '#00ff00',
      secondary: '#008f11',
      text: '#00ff00',
    },
    editor: okaidia,
  },
} as const

export type ThemeName = keyof typeof themes
