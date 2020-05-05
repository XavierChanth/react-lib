import React from 'react'

// default themes
const darkTheme = {
  background: '#050505',
  element: '#020887',
  primary: '#2B50AA',
  secondary: '#1B998B',
  tertiary: '#FCD0A1',
  danger: '#EA526F'
}

const ThemeContext = React.createContext({})

const DarkThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={darkTheme}>{children}</ThemeContext.Provider>
  )
}

const CustomThemeProvider = ({ children, theme }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export { CustomThemeProvider, DarkThemeProvider }
export default ThemeContext
