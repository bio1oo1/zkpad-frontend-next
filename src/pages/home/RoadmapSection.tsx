import React, {useState, useEffect, useRef} from 'react';

import {Box, Wrap} from '@chakra-ui/react';
import SectionTitle from '../../components/SectionTitle';
import RoadmapMilestone from '../../components/RoadmapMilestone';

interface Props {}

const roadmapInfo = [
  {
    title: 'LAUNCH',
    time: 'Q2 2022',
    content: [
      'Seed round',
      'Private sale',
      'Website reveal',
      'Public sale',
      'Beta testing',
      'Community incentives',
      'Partnerships announcements',
      'Educational content'
    ],
    grow: 1
  },
  {
    title: 'FIRST IDOs',
    time: 'Q3 2022',
    content: [
      'Audit',
      'Staking',
      'First IDOs',
      'Vault strategy V1',
      'Developer support (libraries, SDK...)'
    ],
    grow: 1
  },
  {
    title: 'GOVERNANCE',
    time: 'Q4 2022',
    content: [
      'ZkPad DAO',
      'More partnerships',
      'Fees redistribution',
      'Deeper integration with other projects'
    ],
    grow: 1
  },

  {
    title: 'ZKPAD 2.0',
    time: '2023',
    content: ['Cross-rollups deployment', 'ZkPad mobile app'],
    grow: 0
  }
];

const RoadmapSection = (props: Props) => {
  const [goingUp, setGoingUp] = useState(false);
  const prevElementY = useRef(0);

  const [isHidden, setHidden] = useState([true, true, true, true]);

  useEffect(() => {
    const handleScroll = () => {
      const elementTop = document.getElementById('roadmap-box')!.getBoundingClientRect().top;
      if (prevElementY.current < elementTop && goingUp) {
        setGoingUp(false);
      }
      if (prevElementY.current > elementTop && !goingUp) {
        setGoingUp(true);
      }
      // console.log(elementTop);

      const windowHeight = window.innerHeight;
      const windowsWidth = window.innerWidth;
      prevElementY.current = elementTop;

      if (windowsWidth >= 768) {
        setHidden([false, false, false, false]);
      } else {
        const fixValue = 60;
        windowHeight < elementTop
          ? setHidden([true, true, true, true])
          : (windowHeight / 4) * 3 - fixValue < elementTop
          ? setHidden([false, true, true, true])
          : (windowHeight / 4) * 2 - fixValue < elementTop
          ? setHidden([false, false, true, true])
          : (windowHeight / 4) * 1 - fixValue < elementTop
          ? setHidden([false, false, false, true])
          : setHidden([false, false, false, false]);
      }
    };

    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp]);

  return (
    <Box w="100%">
      <SectionTitle name="Roadmap" />
      <Box id="roadmap-box">
        <Wrap spacing={0} justify="stretch" w="100%">
          {roadmapInfo.map(({title, time, content, grow}, index) => (
            <RoadmapMilestone
              key={`roadmap_${index}`}
              title={title}
              time={time}
              content={content}
              hasLine={index < 3 ? true : false}
              hidden={isHidden[index]}
              hiddenLine={isHidden[index + 1]}
              grow={grow}
            />
          ))}
        </Wrap>
      </Box>
    </Box>
  );
};

export default RoadmapSection;
