import React from 'react';
import {Button, Link} from '@chakra-ui/react';
import {WhitepaperLink} from '../constants';

interface Props {
  w?: string;
  h?: string;
  fontSize?: string;
  borderColor?: string;
  bg?: string;
  color?: string;
  _hover?: object;
}

const WhitepaperButton = (props: Props) => {
  const {w, h, fontSize, borderColor, bg, color, _hover} = props;

  return (
    <Link href={WhitepaperLink} _hover={{textDecoration: 'none'}} isExternal>
      <Button
        w={w ? w : '228px'}
        h={h ? h : '64px'}
        fontSize={fontSize ? fontSize : '18px'}
        borderRadius="4px"
        border="2px solid"
        borderColor={borderColor ? borderColor : '#fff'}
        bg={bg ? bg : 'none'}
        color={color ? color : '#fff'}
        _hover={_hover ? _hover : {bg: '#fff', color: '#000'}}
        _active={{}}
      >
        Read our Whitepaper
      </Button>
    </Link>
  );
};

export default WhitepaperButton;
