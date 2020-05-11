import React, { cloneElement } from 'react'
import Button from './button'

const ButtonBar = ({ children }) => {
  if (children.length <= 1) return children

  const getPosition = (index) => {
    switch (index) {
      case 0: return 'left'
      case children.length - 1: return 'right'
      default: return 'middle'
    }
  }

  return children.map((child, index) => {
    return cloneElement(child, { [getPosition(index)]: true, key: index })
  })
}

export default ButtonBar
export { Button }
