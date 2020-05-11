/** @jsx jsx */
import React from 'react'
import { Global, css, jsx } from '@emotion/core'

// default themes
const darkTheme = {
  background: '#151525',
  pane: '#505050',
  themes: {
    blended: {
      text: '#ffffff',
      element: '#151525'
    },
    white: {
      text: '#151525',
      element: '#eeeeee'
    },
    default: {
      text: '#ffffff',
      element: '#2B50AA'
    },
    success: {
      text: '#ffffff',
      element: '#1B998B'
    },
    info: {
      text: '#ffffff',
      element: '#F0544F'
    },
    warning: {
      text: '#ffffff',
      element: '#B9B535'
    },
    danger: {
      text: '#ffffff',
      element: '#EA324F'
    }
  },
  font: ''
}

const defaultJssOverride = {
  body: {
    backgroundColor: darkTheme.background
  }
};

const ThemeContext = React.createContext({})

const DarkThemeProvider = ({ children, jss }) => {
  return <ThemeContext.Provider value={darkTheme}>
    {jssOverride(jss)}
    {children}
  </ThemeContext.Provider>
}

const CustomThemeProvider = ({ children, theme, jss }) => {
  return <ThemeContext.Provider value={theme}>
    {jssOverride(jss)}
    {children}
  </ThemeContext.Provider>
}

const isColor = (string) => {
  return darkTheme.themes.hasOwnProperty(string);
}

const jssOverride = (jss = defaultJssOverride) => {
  return <Global styles={css(jss)} />
}

export { CustomThemeProvider, DarkThemeProvider, isColor }
export default ThemeContext
