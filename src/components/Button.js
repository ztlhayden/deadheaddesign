import React from 'react'
import { navigate } from 'gatsby'

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
}

const Button = ({ children, className = '', size }) => {
  return (
    <button
      type='button'
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-contrast_light
        hover:bg-contrast_light_darker
        rounded
        text-primary
        font-semibold
      `}
      onClick={() => {
        navigate('/contact')
      }}
    >
      {children}
    </button>
  )
}

export default Button
