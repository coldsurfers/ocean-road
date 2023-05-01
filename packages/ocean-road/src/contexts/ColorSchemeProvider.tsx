import {
  Context,
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

export type ColorScheme = 'light' | 'dark' | 'userPreference'

type Theme = {
  name: 'lightMode' | 'darkMode'
  colorGray0: string
  colorGray100: string
}

const lightModeTheme: Theme = {
  name: 'lightMode',
  colorGray0: 'white',
  colorGray100: '#ababab',
}
const darkModeTheme: Theme = {
  name: 'darkMode',
  colorGray0: 'black',
  colorGray100: '#aaaaaa',
}

const ThemeContext: Context<Theme> = createContext<Theme>(lightModeTheme)

const themeToStyles = (theme: Theme) => {
  let styles = ''
  const lightColorDesignTokens = {
    colorGray0: 'white',
    colorGray100: '#ababab',
  }
  const darkColorDesignTokens = {
    colorGray0: 'black',
    colorGray100: '#aaaaaa',
  }
  Object.keys(theme).forEach((key) => {
    if (key.startsWith('color')) {
      styles += `  --g-${key}: ${theme[key as keyof Theme]};\n`
    }
  })
  if (theme.name === 'darkMode') {
    Object.keys(darkColorDesignTokens).forEach((key) => {
      styles += `  --${key}: ${
        darkColorDesignTokens[key as keyof typeof darkColorDesignTokens]
      };\n`
    })
  }
  if (theme.name === 'lightMode') {
    Object.keys(lightColorDesignTokens).forEach((key) => {
      styles += `  --${key}: ${
        lightColorDesignTokens[key as keyof typeof lightColorDesignTokens]
      };\n`
    })
  }

  return styles
}

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
  id,
}: PropsWithChildren<{ colorScheme: ColorScheme; id?: string }>) => {
  const [theme, setTheme] = useState(lightModeTheme)
  const className = id ? `__oceanRoadTheme${id}` : undefined
  const selector = className ? `.${className}` : ':root'

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

  return (
    <ThemeContext.Provider value={theme}>
      <style
        dangerouslySetInnerHTML={{
          __html:
            colorScheme === 'userPreference'
              ? `@media(prefers-color-scheme: dark) {
  ${selector} {
${themeToStyles(darkModeTheme)} }
}`
              : `${selector} {
${themeToStyles(theme)} }`,
        }}
      />
      <div className={className}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ColorSchemeProvider

export const useColorScheme = () => {
  const theme = useContext(ThemeContext)
  return theme || lightModeTheme
}
