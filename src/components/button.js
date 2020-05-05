import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import ThemeContext from './themecontext'

const Button = ({ children }) => {
  const theme = useContext(ThemeContext)
  const classes = createUseStyles({
    button: {
      color: theme.primary,
      backgroundColor: theme.element
    }
  })()
  return <button className={classes.button}>{children}</button>
}

export default Button
