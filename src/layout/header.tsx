import React from 'react';
import {Box, Stack, Heading, Flex, Image, useDisclosure, Hide, Link} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';
import NavLink from '../components/NavLink';
import JoinDiscordButton from '../components/JoinDiscordButton';
import {CareerLink, WhitepaperLink, TwitterLink, TelegramLink} from '../constants';

interface Props {}

const Header = (props: Props) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      px={0}
      py={6}
      color="white"
      {...props}
    >
      <Link href="/" _hover={{textDecoration: 'none'}}>
        <Flex align="center" mr={5}>
          <Image src="/images/logo.png" alt="zkPad" mr="4" h="57px" />
          <Heading fontSize="24px" mt="5px">
            ZKPAD
          </Heading>
        </Flex>
      </Link>

      <Box display={{base: 'block', md: 'none'}} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{base: 'column', md: 'row'}}
        display={{base: isOpen ? 'block' : 'none'}}
        width={{base: 'full', md: 'auto'}}
        alignItems="center"
        flexGrow={1}
        mt={{base: 4, md: 0}}
      >
        <NavLink name="Whitepaper" href={WhitepaperLink} />
        <NavLink name="Careers" href={CareerLink} badge="Hiring" />
        <NavLink name="Twitter" href={TwitterLink} />
        <NavLink name="Telegram" href={TelegramLink} />
      </Stack>

      <Box display={{base: isOpen ? 'block' : 'none', md: 'block'}} mt={{base: 4, md: 0}}>
        <Stack
          direction={{base: 'column', md: 'row'}}
          display={{base: isOpen ? 'block' : 'none', md: 'flex'}}
          width={{base: 'full', md: 'auto'}}
          alignItems="center"
          flexGrow={1}
          mt={{base: 0}}
          spacing={{base: '0', md: '40px'}}
        >
          <Hide below="md">
            <NavLink name="Twitter" href={TwitterLink} />
            <NavLink name="Whitepaper" href={WhitepaperLink} />
            <NavLink name="Careers" href={CareerLink} badge="Hiring" />
            <NavLink name="Telegram" href={TelegramLink} />
          </Hide>

          <JoinDiscordButton px="18px" py="12px" fontSize="14px" w="149px" h="42px" />
        </Stack>
      </Box>
    </Flex>
  );
};

export default Header;
