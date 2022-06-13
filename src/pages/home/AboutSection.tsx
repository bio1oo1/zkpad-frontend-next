import React from 'react';
import {Flex, Box, Spacer, Stack, Heading, Text} from '@chakra-ui/react';

interface Props {}

import WhitepaperButton from '../../components/WhitepaperButton';
import JoinDiscordButton from '../../components/JoinDiscordButton';

const AboutSection = (props: Props) => {
  return (
    <Box w="100%" bg="#fff" color="#000" textAlign="center" borderRadius="4px" px="10px" py="64px">
      <Heading fontSize="24px">THE FIRST LAUNCHPAD ON STARKNET</Heading>
      <Text fontSize="13px" my="22px">
        Discover what we’re working on and join the ZkPad galaxy.
      </Text>
      <Flex>
        <Spacer />
        <Stack direction={['column', 'column', 'row']} mt="10px">
          <WhitepaperButton borderColor="#000" color="#000" _hover={{bg: '#000', color: '#fff'}} />
          <Spacer />
          <JoinDiscordButton size="lg" w="228px" fontSize="18px" h="64px" />
        </Stack>
        <Spacer />
      </Flex>
    </Box>
  );
};

export default AboutSection;
