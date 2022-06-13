import React from 'react';
import {Box, Heading, Text, Grid, GridItem} from '@chakra-ui/react';
import SectionTitle from '../../components/SectionTitle';
import FeatureCard from '../../components/FeatureCard';

interface Props {}

const keyFeaturesContent = [
  {
    title: 'Tokenized whitelist',
    description:
      'For each project listed on ZKPad, ZKP token stackers will received whitelist right as NFTs. These NFTs can either give users the right to invest in IDOs on ZKPad or can be resold to another investor.',
    image: '/images/home/feature_whitelist.png'
  },
  {
    title: 'On-chain lottery system',
    description:
      'Most launchpads have an unclear off-chain lottery system to determine the whitelisted investors. For more transparency, we’ve decided to implement this mechanism completely on-chain.',
    image: '/images/home/feature_lottery.png'
  },
  {
    title: 'Managed market making',
    description:
      'Managing the market making of the tokens for each project will allow us to control the front-running and eventual “pump and dumps” at the token listing. We opted for to a fixed swap pool system.',
    image: '/images/home/feature_market.png'
  },
  {
    title: 'Optimized staking rewards',
    description:
      'Staking your ZKP tokens will provide you with a boosted yield. This will be achieved by leveraging Defi protocols on our vaults.',
    image: '/images/home/feature_staking.png'
  }
];

const FeatureSection = (props: Props) => {
  return (
    <Box>
      <SectionTitle name="Key Features" />
      <Box mt="70px">
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)'
          }}
          gap={6}
        >
          {keyFeaturesContent.map(({title, description, image}, index) => (
            <FeatureCard
              key={`feature_${index}`}
              title={title}
              description={description}
              image={image}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FeatureSection;
