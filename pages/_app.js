import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import 'tailwindcss/tailwind.css'
import { AnimatePresence } from 'framer-motion'
import Layout from '../comps/layout'
function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider>
    <AnimatePresence>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  </ChakraProvider>
  )
}

export default MyApp
