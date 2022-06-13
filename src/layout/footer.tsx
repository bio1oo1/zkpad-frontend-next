import React from 'react';
import {Flex, HStack, SimpleGrid, Box, Text, Link, Image, useDisclosure} from '@chakra-ui/react';
import NavLink from '../components/NavLink';
import {
  CareerLink,
  WhitepaperLink,
  TwitterLink,
  DiscordLink,
  TelegramLink,
  TermConditionLink,
  PrivacyPolicyLink
} from '../constants';

interface Props {}

const Footer = (props: Props) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Flex direction={['column', 'row']} justify="space-between" pt="20px" pb="50px">
      <Box mt={3}>
        <HStack spacing={['10px', '45px']} justify="space-between">
          <Flex justify="space-between" wrap="wrap" gap={{base: '20px', lg: '30px'}}>
            <NavLink name="Whitepaper" href={WhitepaperLink} />
            <NavLink name="Careers" href={CareerLink} badge="Hiring" />
            <NavLink name="Twitter" href={TwitterLink} />
            <NavLink name="Telegram" href={TelegramLink} />
            <NavLink name="Discord" href={DiscordLink} />
            {/* <NavLink name={`Terms & Condition`} href={TermConditionLink} />
            <NavLink name={`Privacy & Policy`} href={PrivacyPolicyLink} /> */}
          </Flex>
        </HStack>
        <Text color="gray.400" mt="15px">
          Get in touch:{' '}
          <Link color="gray.200" href="mailto: contact@zkpad.io">
            contact@zkpad.io
          </Link>
        </Text>
      </Box>
      <Box ml="auto">
        <Link href="/" _hover={{textDecoration: 'none'}}>
          <Image src="/images/logo.png" alt="zkPad Logo" h="57px" />
        </Link>
      </Box>
    </Flex>
  );
};

export default Footer;
