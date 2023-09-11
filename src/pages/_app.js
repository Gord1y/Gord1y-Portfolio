/* eslint-disable react/prop-types */
import DefaultLayout from '@layouts/default'
import * as gtag from '@lib/gtag'
import GlobalStyles from '@styles/globals'
import theme from '@themes/dark'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'

// Notice how we track pageview when route is changed
Router.events.on('routeChangeComplete', url => gtag.pageview(url))

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
