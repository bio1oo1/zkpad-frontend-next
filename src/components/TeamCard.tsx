import React from 'react';
import {Flex, HStack, Spacer, Box, Heading, Text, Image} from '@chakra-ui/react';
import TeamSocialLink from '../components/TeamSocialLink';

interface Props {
  name: string;
  role: string;
  image: string;
  twitter?: string;
  linkedin?: string;
}

const TeamCard = (props: Props) => {
  const {name, role, image, twitter, linkedin} = props;
  return (
    <Box>
      <Image w="100%" src={image} alt={`zkPad Team | ${name} | ${role}`} borderRadius="4px" />
      <Box textAlign="center" mt="10px">
        <Text fontSize="14px" mt="12px" color="purple.900" fontWeight="bold">
          {role.toUpperCase()}
        </Text>
        <Heading fontSize="13px" mt="12px">
          {name.toUpperCase()}
        </Heading>
        <Flex mt="12px">
          <Spacer />
          <HStack spacing="30px">
            {linkedin ? <TeamSocialLink media="linkedin" name={name} href={linkedin} /> : ''}
            {twitter ? <TeamSocialLink media="twitter" name={name} href={twitter} /> : ''}
          </HStack>
          <Spacer />
        </Flex>
      </Box>
    </Box>
  );
};

export default TeamCard;
