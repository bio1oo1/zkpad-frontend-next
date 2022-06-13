import React from 'react';
import {Flex, Box, Spacer, VStack, Text, Image} from '@chakra-ui/react';
import SectionTitle from '../../components/SectionTitle';

interface Props {}

const InvestorSection = (props: Props) => {
  return (
    <Flex direction={{base: 'column', md: 'row'}}>
      <style jsx>{`
        p strong {
          font-size: 16.7px;
        }
      `}</style>
      <Box w={['100%', '100%', '40%']} m="auto">
        <SectionTitle name="For Investors" shadow />
        <Text fontSize="22px" lineHeight="32.78px" my="12px">
          <strong>Venture Capital made more open.</strong>
        </Text>
        <Text fontSize="15px" my="14px" lineHeight="21px" letterSpacing="1.1px">
          ZkPad allows you to invest in the most promising projects on StarkNet. Our priorities are{' '}
          <strong>safety</strong>, <strong>decentralization</strong> and a{' '}
          <strong>great user experience</strong> in order to make early-stage project investment
          more open. We believe that fortune favors the bold and indeed investing early on a project
          is what generates the most <strong>return on investment</strong>. Our platform is
          specifically design to open investment opportunities, formerly reserved to investement
          funds, to retail investors.
        </Text>
      </Box>
      <Spacer />
      <Box w={['100%', '100%', '40%']}>
        <Image
          w="100%"
          src="/images/home/investors.gif"
          alt="A space inspired background with an app where someone click on an “Invest” button."
        />
      </Box>
    </Flex>
  );
};

export default InvestorSection;
