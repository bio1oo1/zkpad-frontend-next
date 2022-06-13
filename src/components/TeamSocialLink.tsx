import React from 'react';
import {Image, Link} from '@chakra-ui/react';

interface Props {
  name: string;
  media: string;
  href: string;
}

const TeamSocialLink = (props: Props) => {
  const {name, href, media} = props;
  return (
    <Link href={href} isExternal>
      <Image
        src={`/images/home/social_${media}.png`}
        alt={`zkPad Team | ${name} | linkedin`}
        w="23px"
      />
    </Link>
  );
};

export default TeamSocialLink;
