import React from 'react';
import {Text, Link} from '@chakra-ui/react';

interface Props {
  name: string;
  href: string;
  badge?: string;
}

const NavLink = (props: Props) => {
  const {name, href, badge} = props;
  return (
    <Text style={{position: 'relative'}}>
      <Link href={href} isExternal>
        {name}
      </Link>
      {badge ? (
        <span
          style={{
            position: 'absolute',
            top: '-7px',
            left: '33px',
            fontSize: '12px',
            lineHeight: '13.66px',
            color: '#8f00ff'
          }}
        >
          {badge}
        </span>
      ) : (
        ''
      )}
    </Text>
  );
};

export default NavLink;
