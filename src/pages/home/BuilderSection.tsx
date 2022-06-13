import React from 'react';
import {Flex, Box, Spacer, Heading, Text, Image} from '@chakra-ui/react';
import SectionTitle from '../../components/SectionTitle';

interface Props {}

const BuilderSection = (props: Props) => {
  return (
    <Flex direction={{base: 'column', md: 'row-reverse'}}>
      <style jsx>{`
        p strong {
          font-size: 16.7px;
        }
      `}</style>
      <Box w={['100%', '100%', '40%']} m="auto">
        <SectionTitle name="For Builders" shadow />
        <Text fontSize="22px" lineHeight="32.78px" my="12px">
          <strong>Raise funds and join our accelerator program.</strong>
        </Text>
        <Text fontSize="15px" my="14px" lineHeight="21px" letterSpacing="1.1px">
          ZkPad offers more than a safe platform for your <strong>IDO</strong>. The goal of the
          ZkPad accelerator is to provide founders with{' '}
          <strong>strategic and operational support</strong> including co-marketing on
          Twitter/Discord, partnership and ecosystem intros, access to a database of vetted talents
          including Cairo developers, UX/UI designers and marketers.
        </Text>
      </Box>
      <Spacer />
      <Box w={['100%', '100%', '40%']}>
        <Image
          w="100%"
          src="/images/home/builders.gif"
          alt="3D illustration of our logo leading small meteors of different colors going up"
        />
      </Box>
    </Flex>
  );
};

export default BuilderSection;
