import styled from 'styled-components'
import {Link} from 'gatsby'

const NavButton = styled(Link)`
  padding: 0 1rem;
  color: var(--contrast_dark_lighter);
  
  :hover {
    color: var(--white);
  }
`

export default NavButton