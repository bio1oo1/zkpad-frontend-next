import React, {useState, useEffect, useRef} from 'react';
import {VStack} from '@chakra-ui/react';

import WelcomeSection from './WelcomeSection';
import FeatureSection from './FeatureSection';
import InvestorSection from './InvestorSection';
import BuilderSection from './BuilderSection';
import RoadmapSection from './RoadmapSection';
import TeamSection from './TeamSection';
// import AboutSection from './AboutSection';
import NotifySection from './NotifySection';

interface Props {}

const Home = (props: Props) => {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const [isHidden, setHidden] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      // console.log(goingUp, currentScrollY);
      currentScrollY > 0 ? setHidden(false) : setHidden(true);
    };

    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp]);

  return (
    <VStack spacing={{base: '40px', md: '60px'}} my={{base: '30px', md: '60px'}}>
      <WelcomeSection />

      <VStack
        spacing={{base: '40px', md: '60px'}}
        my={{base: '30px', md: '60px'}}
        transition="opacity 2s"
        opacity={isHidden ? '0' : 1}
      >
        <FeatureSection />
        <InvestorSection />
        <BuilderSection />
        <RoadmapSection />
        <TeamSection />
        {/* <AboutSection /> */}
        <NotifySection />
      </VStack>
    </VStack>
  );
};

export default Home;
