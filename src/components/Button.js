import React from 'react'
import { navigate } from 'gatsby'

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
}

const Button = ({ children, className = '', size }) => {
  return (
    <a
      href='https://share.hsforms.com/1Z42l_4JPRRO5i-0se3WYOw57bzd'
      target='_blank'
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-contrast_light
        hover:bg-contrast_light_darker
        rounded
        text-bright_white
        font-semibold
      `}
    >
      {children}
    </a>
  )
}

export default Button
