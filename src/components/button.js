/** @jsx jsx */
import React, { useContext } from 'react'
import { css, jsx } from '@emotion/core'
import ThemeContext, { isColor } from '../theme'
/*
  Button
  props:
    colors: (boolean tags)
      primary
      secondary
      info
      danger
    positional: (connecting buttons into a button bar)
      left
      middle
      right
      */
const Button = ({ children, onClick, ...args }) => {
  const theme = useContext(ThemeContext)
  let colorTheme;
  let borderRadius = "2px";
  for (let arg in args) {
    if (isColor(arg)) {
      colorTheme = theme.themes[arg];
    } else if (['left', 'right', 'middle'].includes(arg)) {
      console.log(children, arg)
      switch(arg) {
        case 'middle': borderRadius = "0"
          break;
        case 'left': borderRadius = "2px 0px 0px 2px"
          break;
        case 'right': borderRadius = "0px 2px 2px 0px"
          break;
        default:break;
      }
    }
  }

  if (!colorTheme) colorTheme = theme.themes.default;

  const styles = css({
      color: colorTheme.text,
      backgroundColor: colorTheme.element,
      display: "inline-block",
      border: "none",
      borderRadius: borderRadius,
      '&:hover': {
        filter: "brightness(1.2)"
      }
  })

  return <button css={styles} onClick={onClick}>{children}</button>
}

export default Button
