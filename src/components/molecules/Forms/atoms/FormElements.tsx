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
  margin: 2px auto;
  border-radius: 3px;
  padding: 3px;
  color: var(--contrast_dark);
`

const Label = styled.label`
  ${star}
`

const Input = styled.input`
  ${star}
`

const TextArea = styled.textarea`
  ${star}
  height: 4rem;
`

const Button = styled.button`
  ${star}
  background-color: var(--white);
  width: auto;
  color: var(--contrast_dark);
  font-weight: bold;
  font-size: 1.2rem;
  padding: 3px 7px;
  margin-top: 10px;

  :hover,
  :focus {
    color: var(--contrast_dark_lighter);
  }
`

export {Form, Label, Input, TextArea, Button}