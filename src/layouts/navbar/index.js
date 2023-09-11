import { Menu } from '@components'
import { navLinks } from '@config'
import { useScrollDirection } from '@hooks'
import { LOADER_DELAY } from '@lib/constants'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

// import * as gtag from '@lib/gtag';
import { StyledHeader, StyledLinks, StyledNav } from './styles'

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome)
  const scrollDirection = useScrollDirection('down')
  const [scrolledToTop, setScrolledToTop] = useState(true)

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 100)

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const timeout = isHome ? LOADER_DELAY : 0
  const fadeClass = isHome ? 'fade' : ''
  const fadeDownClass = isHome ? 'fadedown' : ''

  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <div className='logo' tabIndex='-1'>
                <a href='/' aria-label='home'>
                  Gord1y
                </a>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>

        <StyledLinks>
          <ol>
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <CSSTransition
                    key={name}
                    classNames={fadeDownClass}
                    timeout={timeout}
                  >
                    <li
                      key={url}
                      style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}
                    >
                      <a data-scroll href={url}>
                        {name}
                      </a>
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ol>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                <div
                  style={{
                    transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms`
                  }}
                >
                  <a
                    href='/DanyloHordiienkoCV.pdf'
                    target='_blank'
                    className='resume-button'
                  >
                    My Resume
                  </a>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </StyledLinks>

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <Menu />
            </CSSTransition>
          )}
        </TransitionGroup>
      </StyledNav>
    </StyledHeader>
  )
}

Nav.propTypes = {
  isHome: PropTypes.bool
}

export default Nav
