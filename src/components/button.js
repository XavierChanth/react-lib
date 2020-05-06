import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import ThemeContext, { isColor } from '../theme'

const Button = ({ children, onClick, ...args }) => {
  const theme = useContext(ThemeContext)

  let color;
  for(let arg in args) {
    if (isColor(arg)) {
      color = theme[arg];
    }
  }

  if(!color) color = theme.primary;

  const classes = createUseStyles({
    button: {
      color: theme.accent,
      backgroundColor: color,
      display: "inline-block",
      border: "none",
      borderRadius: "2px",
      '&:hover': {
        filter: "saturate(1.2)"
      }
    }
  })()
  return <button className={classes.button} onClick={onClick}>{children}</button>
}

export default Button
