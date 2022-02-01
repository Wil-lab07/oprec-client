import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import {AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>  
    </ChakraProvider>
  )
}

export default MyApp
