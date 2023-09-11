/* eslint-disable max-len */
import PropTypes from 'prop-types'
import React from 'react'
import { withTheme } from 'styled-components'

const IconLoader = ({ theme }) => (
  <svg
    id='logo'
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    width={110}
    height={120}
    viewBox='0 0 110 120'
  >
    <title>Loader Logo</title>
    <g fill={theme.brand.primary}>
      <text
        y='50'
        fontSize='32'
        fontWeight='bold'
        fontFamily='Avenir, Helvetica, sans-serif'
      >
        Gord1y
      </text>
    </g>
  </svg>
)

IconLoader.propTypes = {
  theme: PropTypes.object
}

export default withTheme(IconLoader)
