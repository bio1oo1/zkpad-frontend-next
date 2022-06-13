import React from 'react';
import {GridItem, Heading, Text, Image} from '@chakra-ui/react';

interface Props {
  title: string;
  description: string;
  image?: string;
}

const FeatureCard = (props: Props) => {
  const {title, description, image} = props;
  return (
    <GridItem
      w="100%"
      bg="#fff"
      color="#000"
      p="18px"
      borderRadius="4px"
      position="relative"
      mt={{base: '50px', md: '40px', lg: '10px'}}
    >
      {image ? (
        <Image
          w="90px"
          src={image}
          position="absolute"
          top="-45px"
          left="25px"
          bg="#FAF3FF"
          borderRadius="50%"
          boxShadow="0px 3px 10px 0px #8f00ff33"
        />
      ) : (
        ''
      )}
      <Heading fontSize="13px" lineHeight="16px" color="purple.900" py="20px" mt="40px">
        {title.toUpperCase()}
      </Heading>
      <Text fontSize="12px">{description}</Text>
    </GridItem>
  );
};

export default FeatureCard;
