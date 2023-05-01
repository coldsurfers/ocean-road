import {
  Context,
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react'

export type ColorScheme = 'light' | 'dark' | 'userPreference'

type Theme = {}

const lightModeTheme: Theme = {}
const darkModeTheme: Theme = {}

const ThemeContext: Context<Theme> = createContext<Theme>(lightModeTheme)

const getTheme = (colorScheme?: ColorScheme) =>
  colorScheme === 'dark' ||
  (colorScheme === 'userPreference' &&
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
    ? darkModeTheme
    : lightModeTheme

const ColorSchemeProvider = ({
  children,
  colorScheme,
}: PropsWithChildren<{ colorScheme: ColorScheme }>) => {
  const [theme, setTheme] = useState(getTheme(colorScheme))

  const handlePrefChange = useCallback((e: MediaQueryListEvent) => {
    setTheme(getTheme(e.matches ? 'dark' : 'light'))
  }, [])

  useEffect(() => {
    setTheme(getTheme(colorScheme))
    if (colorScheme === 'userPreference' && window.matchMedia) {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addListener(handlePrefChange)
      return () =>
        window
          .matchMedia('(prefers-color-scheme: dark)')
          .removeListener(handlePrefChange)
    }
    return undefined
  }, [colorScheme])

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export default ColorSchemeProvider
