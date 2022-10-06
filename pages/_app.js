import Head from 'next/Head';
import NProgress from 'nprogress';
import {ChakraProvider} from '@chakra-ui/react';
import Router from 'next/router'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>

    </Head>
    <ChakraProvider>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </ChakraProvider>
    
    </>
  )
}

export default MyApp
