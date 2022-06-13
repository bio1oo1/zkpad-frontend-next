import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['blackAlpha']>
> = {
  purple: {
    100: '',
    200: '',
    300: '',
    400: '',
    500: '',
    600: '',
    700: '#6902BA',
    800: '',
    900: '#8f00ff'
  },
  warning: {
    100: '#ffda95',
    200: '#f5a42a',
    800: '#A16207',
    900: '#854D0E',
  },
  error: {
    100: '#ff826e',
    900: '#FF4343',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
