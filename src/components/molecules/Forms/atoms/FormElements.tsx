import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Form = styled.form`
  .bot {
    display: none;
  }
`

const Label = styled.label`
  display: block;
`

const Input = styled.input`
  display: block;
`

const TextArea = styled.input`
  display: block;
`

const Button = styled.button`
  display: block;
`

export {Form, Label, Input, TextArea, Button}