import React from 'react';
import {Heading, Text, Image, Stack, VStack, Divider} from '@chakra-ui/react';

interface Props {
  title: string;
  time: string;
  content: string[];
  hasLine?: boolean;
  hidden: boolean;
  hiddenLine: boolean;
  grow?: number;
}

const trasition = {base: 'opacity 2s', md: 'none'};

const RoadmapMilestone = (props: Props) => {
  const {title, time, content, hasLine, hidden, hiddenLine, grow} = props;

  return (
    <Stack
      direction={{base: 'row', lg: 'column'}}
      position="relative"
      flexGrow={{base: 0, lg: grow}}
      flexBasis={{base: '100%', lg: '170px'}}
    >
      {hasLine ? (
        <Divider
          display="block"
          width={{base: '2px', lg: 'calc(100% - 40px)'}}
          height={{base: 'calc(100% - 40px)', lg: '2px'}}
          background="#fff"
          borderColor="#fff"
          position="absolute"
          top={{base: '70px', lg: '43px'}}
          left={{base: '43px', lg: '70px'}}
          opacity={hiddenLine ? '0' : 1}
          transition={trasition}
        ></Divider>
      ) : (
        ''
      )}
      <Image
        className="roadmap-milestone-spot"
        w="70px"
        h="70px"
        p="5px"
        ml={{base: '8px', lg: '0px'}}
        mt="6px"
        bg="#0C0C0C"
        src="/images/home/roadmap_spot.png"
        alt="Roadmap Spot"
        transition={trasition}
        opacity={hidden ? '0' : 1}
      />
      <VStack alignItems="start" transition={trasition} opacity={hidden ? '0' : 1}>
        <Heading fontSize={['20px']} mt="25px">
          {title}
        </Heading>
        <Text color="purple.900">{time}</Text>
        <Text fontSize={{base: '15px', md: '14px'}} mt="22px">
          {content.map((str, contentIndex) => (
            <span key={`roadmapcontent_${contentIndex}`}>
              <span>{str}</span>
              <br />
            </span>
          ))}
        </Text>
      </VStack>
    </Stack>
  );
};

export default RoadmapMilestone;
