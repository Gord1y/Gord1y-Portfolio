/* eslint-disable global-require */
import { NumberedHeading } from '@common/styles'
import { skills } from '@config'
import { srConfig } from '@config/sr'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

import img from './avatar.jpg'
import { StyledAboutSection, StyledPic, StyledText } from './styles'

const About = () => {
  const revealContainer = useRef(null)

  useEffect(() => {
    const ScrollReveal = require('scrollreveal')
    const sr = ScrollReveal.default()
    sr.reveal(revealContainer.current, srConfig())
  }, [])

  return (
    <StyledAboutSection id='about' ref={revealContainer}>
      <NumberedHeading>About Me</NumberedHeading>
      <div className='inner'>
        <StyledText>
          <div>
            <p>
              Hello! I&apos;m Dania, a Full-Stack Developer based in Zhytomyr,
              Ukraine
            </p>
            <p>
              I enjoy creating beautiful and reliable applications for internet
              and phones.
              <br />
              My goal is to always build scalable products and performant
              experiences.
            </p>
            <br />
            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
          </div>

          <ul className='skills-list'>
            {skills && skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className='wrapper'>
            <Image
              width={3000}
              height={4000}
              src={img}
              alt='Avatar'
              className='img'
              priority
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  )
}

export default About
