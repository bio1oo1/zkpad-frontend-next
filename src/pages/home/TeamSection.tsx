import React from 'react';
import {Box, SimpleGrid, Heading, Text, Image} from '@chakra-ui/react';
import SectionTitle from '../../components/SectionTitle';
import TeamCard from '../../components/TeamCard';

interface Props {}

const teamProfileContent = [
  {
    name: 'Matteo Georges',
    role: 'Co-founder & CEO',
    image: '/images/home/team_matteo_georges.png',
    twitter: 'https://twitter.com/Sexlanaa',
    linkedin: 'https://www.linkedin.com/in/matt%C3%A9o-georges-69a2241a1/'
  },
  {
    name: 'Matthias Hallgren',
    role: 'Co-founder & CTO',
    image: '/images/home/team_matthias_hallgren.png',
    twitter: 'https://twitter.com/0xevolve',
    linkedin: 'https://www.linkedin.com/in/matthias-hallgren-65b9041a9/'
  },
  {
    name: 'Nicolas Vrillac',
    role: 'CMO',
    image: '/images/home/team_nicolas_vrillac.png',
    twitter: 'https://twitter.com/nikron_eth',
    linkedin: 'https://www.linkedin.com/in/nicolas-vrccc/'
  },
  {
    name: 'Filip Laurentiu',
    role: 'Blockchain Dev',
    image: '/images/home/team_filip_laurentiu.png',
    twitter: 'https://twitter.com/filiplaurentiu',
    linkedin: 'https://www.linkedin.com/in/filip-laurentiu/'
  },
  {
    name: 'Marwan',
    role: 'Blockchain Dev',
    image: '/images/home/team_marwan.png',
    twitter: 'https://twitter.com/DeveloperMarwan',
    linkedin: 'https://www.linkedin.com/in/marwanaziz/'
  },
  {
    name: 'Mohammed Chakor',
    role: 'Community Growth',
    image: '/images/home/team_mohammed_chakor.png',
    twitter: 'https://twitter.com/mohammed_chakor'
  }
];

const TeamSection = (props: Props) => {
  return (
    <Box w="100%">
      <SectionTitle name="Team" />
      <SimpleGrid columns={[2, 3, 4]} spacing={10}>
        {teamProfileContent.map(({name, role, image, twitter, linkedin}, index) => (
          <TeamCard
            key={`teamcard_${index}`}
            image={image}
            name={name}
            role={role}
            twitter={twitter}
            linkedin={linkedin}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TeamSection;
