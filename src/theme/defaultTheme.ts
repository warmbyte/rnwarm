import {useTheme as baseUseTheme} from '@emotion/react';
import colors from './colors';

const defaultTheme = {
  global: {
    colors,
  },
  components: {
    Button: {},
    Text: {},
  },
};

export type Theme = typeof defaultTheme;

// @ts-ignore
export const useTheme: () => Theme = baseUseTheme;

export const theme = defaultTheme;
