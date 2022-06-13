import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import {Container} from '@chakra-ui/react';
import {ContractInterface} from 'starknet';

export const siteTitle = 'zkPad';

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Container maxW={{base: '100%', md: '90%'}}>
        <Header />
        <>{children}</>
        <Footer />
      </Container>
    </>
  );
}
