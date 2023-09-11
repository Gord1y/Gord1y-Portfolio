import { Side } from '@components'
import { email } from '@config'
import PropTypes from 'prop-types'

import { StyledLinkWrapper } from './styles'

const Email = ({ isHome }) => (
  <Side isHome={isHome} orientation='right'>
    <StyledLinkWrapper>
      <a href={`mailto:${email}`}>{email}</a>
    </StyledLinkWrapper>
  </Side>
)

Email.propTypes = {
  isHome: PropTypes.bool
}

export default Email
