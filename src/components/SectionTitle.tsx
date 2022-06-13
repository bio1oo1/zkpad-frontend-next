import React from 'react';
import {Heading, Box} from '@chakra-ui/react';

interface Props {
  name: string;
  shadow?: boolean;
}

const SectionTitle = (props: Props) => {
  const {name, shadow} = props;
  return shadow ? (
    <Box bg="purple.900" w={name.length * 23 + 'px'} h="18px" ml="19px">
      <Heading fontSize={['20px', '24px']} mb="20px" position="relative" top="-8px" left="-21px">
        {name.toUpperCase()}
      </Heading>
    </Box>
  ) : (
    <Heading fontSize={['20px', '24px']} mb="20px">
      {name.toUpperCase()}
    </Heading>
  );
};

export default SectionTitle;
