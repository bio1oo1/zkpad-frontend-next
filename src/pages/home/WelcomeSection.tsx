import React from 'react';
import {Flex, Stack, Box, Heading, Text, Image, Show, Hide} from '@chakra-ui/react';

import WhitepaperButton from '../../components/WhitepaperButton';
import JoinDiscordButton from '../../components/JoinDiscordButton';

interface Props {}

const WelcomeSection = (props: Props) => {
  return (
    <Flex direction={{base: 'column', lg: 'row-reverse'}} w={{base: '100%', md: '112%'}}>
      <Box flex="1" mt={{base: '0', lg: '-5.7vw'}}>
        <Hide below="lg">
          <Image
            w="65vw"
            h="36.5625vw"
            src="/images/home/welcome_hero.gif"
            alt="3D illustration of a meteor and stars scattered all over hero section"
            style={{
              width: '54.5vw',
              height: '36.5625vw',
              objectFit: 'cover',
              objectPosition: '56% 0'
            }}
          />
        </Hide>
        <Show below="lg">
          <Image
            w="100vw"
            h="56.25vw"
            src="/images/home/welcome_hero.gif"
            alt="3D illustration of a meteor and stars scattered all over hero section"
            style={{
              width: '90vw',
              height: '56.25vw',
              objectFit: 'cover',
              objectPosition: '56% 0'
            }}
          />
        </Show>
      </Box>

      <Box w={{base: '100%', lg: '45%'}} m="auto" pl="6%">
        <Heading fontSize={{base: '22px', md: '30px'}} lineHeight={{base: '30px', md: '46px'}}>
          MAKING <br />
          DECENTRALIZED <br />
          FUNDRAISING <br />
          ACCESSIBLE TO ALL.
        </Heading>
        <Text
          w={{base: '100%', md: '90%', xl: '90%'}}
          fontSize={{base: '18px'}}
          lineHeight={{base: '25px'}}
          my={25}
        >
          ZKPad is the first launchpad on StarkNet. Our platform offers a safe and decentralized way
          for users to invest in pre-selected crypto startups.
        </Text>
        <Stack direction={['column', 'column', 'column', 'row']} align="center" spacing="24px">
          <WhitepaperButton w="216px" fontSize="17px" h="54px" />
          <JoinDiscordButton w="216px" fontSize="17px" h="54px" />
        </Stack>
        <Stack direction="row" mt="38px">
          <Text fontSize="lg" mr="10px">
            Powered by
          </Text>
          <Image
            src="/images/home/logo_starknet.png"
            alt="StartNet Logo"
            w="113px"
            h="22.45px"
            transform="translateY(-1px)"
            margin="5px !important"
          />
        </Stack>
      </Box>
    </Flex>
  );
};

export default WelcomeSection;
