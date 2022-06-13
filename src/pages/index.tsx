import { useStarknetReact } from '@web3-starknet-react/core';
import type { NextPage } from 'next';
import Layout from '../layout';
import Home from './home';
import { useEffect } from 'react';

const ZkPad: NextPage = () => {
  const { account } = useStarknetReact();

  useEffect(() => {
    console.log(account);
  }, [account]);

  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default ZkPad;
