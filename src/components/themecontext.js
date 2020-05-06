import React from 'react'

// default themes
const darkTheme = {
  accent: '#fff',
  accentHover: '#ddd',
  background: '#050505',
  primary: '#2B50AA',
  secondary: '#1B998B',
  info: '#F0544F',
  danger: '#EA324F'
}

const ThemeContext = React.createContext({})

const DarkThemeProvider = ({ children, jssOverride }) => {
  overrideCss(darkTheme, jssOverride)
  return <ThemeContext.Provider value={darkTheme}>{children}</ThemeContext.Provider>
}

const CustomThemeProvider = ({ children, theme, jssOverride }) => {
  overrideCss(theme, jssOverride)
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

const isColor = (string) => {
  return darkTheme.hasOwnProperty(string);
}

const overrideCss = (theme, jss) => {
  document.getElementsByTagName("body")[0].style.backgroundColor = theme.background;
  // TODO override document with JSS somehow
}

export { CustomThemeProvider, DarkThemeProvider, isColor }
export default ThemeContext
