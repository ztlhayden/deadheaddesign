import styled from 'styled-components'
import {Link} from 'gatsby'
import { device } from '../../GlobalStyles/Styles/devices'

const NavButton = styled(Link)`
  color: var(--contrast_dark_lighter);
  width: 100%;
  font-size: 24px;
  padding: 5px;
  margin-bottom: 5px;
  display: block;
  text-align: center;

  :hover {
    color: var(--white);
  }

  @media ${device.laptop} {
    width: fit-content;
    font-size: inherit;
    margin-left: 10px;
  }
`

export default NavButton