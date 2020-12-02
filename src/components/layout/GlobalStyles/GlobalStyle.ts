import { createGlobalStyle } from 'styled-components'
import { colors } from './Styles/colors'
import { font } from './Styles/font'

const GlobalStyle = createGlobalStyle`
  :root {
    ${colors}
    ${font}
  }
`
export default GlobalStyle
