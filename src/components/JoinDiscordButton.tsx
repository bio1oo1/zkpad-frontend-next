import React from 'react';
import {Button, Link} from '@chakra-ui/react';
import {DiscordLink} from '../constants';
interface Props {
  size?: string;
  w?: string;
  h?: string;
  fontSize?: string;
  px?: string;
  py?: string;
}

const JoinDiscordButton = (props: Props) => {
  return (
    <Link href={DiscordLink} _hover={{textDecoration: 'none'}} isExternal>
      <Button
        borderColor="none"
        bg="purple.900"
        borderRadius="4px"
        color="#fff"
        _hover={{bg: 'purple.700'}}
        _active={{}}
        m="auto"
        {...props}
      >
        Join Discord
      </Button>
    </Link>
  );
};

export default JoinDiscordButton;
