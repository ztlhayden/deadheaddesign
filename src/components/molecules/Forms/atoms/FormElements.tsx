import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Form = styled.form`
  .bot {
    display: none;
  }

  width: 100%;
  max-width: 768px;
  margin: 15px auto;
`

const star = `
  display: block;
  width: 100%;
  margin: 5px auto;
  border-radius: 3px;
`

const Label = styled.label`
  ${star}
`

const Input = styled.input`
  ${star}
`

const TextArea = styled.input`
  ${star}
`

const Button = styled.button`
  ${star}
`

export {Form, Label, Input, TextArea, Button}