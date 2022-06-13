import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {ChakraProvider} from '@chakra-ui/react';
import {NextSeo} from 'next-seo';
import defaultSEOConfig from '../../next-seo.config';
import customTheme from '../styles/customTheme';

import {StarknetReactProvider, createStarknetReactRoot} from '@web3-starknet-react/core';

// import starknet.js
import {Provider} from 'starknet';
import Web3ReactManager from 'components/Web3ReactManager';
import dynamic from 'next/dynamic';
import splitbee from '@splitbee/web';
import {useEffect} from 'react';

function getLibrary(provider: any, connector: any) {
  return new Provider(provider);
}

const Web3ReactProviderDefault = dynamic(() => import('../components/defaultprovider'), {
  ssr: false
});

function MyApp({Component, pageProps}: AppProps) {
  useEffect(() => {
    splitbee.init({
      scriptUrl: '/bee.js',
      apiUrl: '/_hive'
    });
  }, []);

  return (
    <ChakraProvider theme={customTheme}>
      <StarknetReactProvider getLibrary={getLibrary}>
        <Web3ReactProviderDefault getLibrary={getLibrary}>
          <Web3ReactManager>
            <NextSeo {...defaultSEOConfig} />
            <Component {...pageProps} />
          </Web3ReactManager>
        </Web3ReactProviderDefault>
      </StarknetReactProvider>
    </ChakraProvider>
  );
}

export default MyApp;
