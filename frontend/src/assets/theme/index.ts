import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

// #804bd8, #544ad8 (그라디언트)

const calcRem = (size: number) => `${size / 16}rem`;

const fontSizes = {
  xs: calcRem(12),
  sm: calcRem(14),
  base: calcRem(16),
  md: calcRem(18),
  lg: calcRem(20),
  xl: calcRem(24),
  xxl: calcRem(32),
  title: calcRem(40),
};

const colors = {
  first: '#2d2839',
  second: '#312c40',
  text: {
    first: '#e2e3e6',
    second: '#acabb4',
    third: '#858090',
  },
  card: {
    title: '#f3f3f3',
    content: '#b6b7b8',
    tag: '#6A59A3',
  },
  green: '#4dcb99',
};
const gradient = {
  main: 'linear-gradient(45deg, #804bd8, #544ad8)',
};

const theme = {
  fontSizes,
  colors,
  gradient,
};

export default theme;
