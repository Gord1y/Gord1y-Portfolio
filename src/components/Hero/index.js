/* eslint-disable react/no-array-index-key */
import { LOADER_DELAY, NAV_DELAY } from '@lib/constants'
import { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { StyledBigTitle, StyledHeroSection } from './styles'

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), NAV_DELAY)
    return () => clearTimeout(timeout)
  }, [])

  const one = <h1>Welcome, I&apos;m</h1>
  const two = <StyledBigTitle>Danylo Hordiienko.</StyledBigTitle>
  const three = (
    <StyledBigTitle slate>I build web and mobile apps.</StyledBigTitle>
  )
  const four = (
    <p>
      I&apos;m a full-stack developer based in Zhytomyr, Ukraine, specializing
      in building exceptional websites and mobile applications, and everything
      in between.
    </p>
  )
  const five = (
    <a href='#contact' className='email-link'>
      Get In Touch
    </a>
  )

  const items = [one, two, three, four, five]

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames='fadeup' timeout={LOADER_DELAY}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  )
}

export default Hero
