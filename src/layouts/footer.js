/* eslint-disable global-require */
import { Icon } from '@components/Icons'
import { socialMedia } from '@config'
import { srConfig } from '@config/sr'
import { useEffect, useRef } from 'react'

import { StyledCredit, StyledFooter, StyledSocialLinks } from './styles'

const Footer = () => {
  const revealContainer = useRef(null)
  useEffect(() => {
    const ScrollReveal = require('scrollreveal')
    const sr = ScrollReveal.default()
    sr.reveal(revealContainer.current, srConfig())
  }, [])

  return (
    <StyledFooter ref={revealContainer}>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }) => (
              <li key={name}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>
      <StyledCredit tabindex='-1'>
        <div>Gord1y © 2023</div>
        <a
          rel='noreferrer'
          target='_blank'
          href='https://github.com/bchiang7/v4'
        >
          <div>Adopted from the Brittany Chiang Portfolio</div>
        </a>
      </StyledCredit>
    </StyledFooter>
  )
}

export default Footer
