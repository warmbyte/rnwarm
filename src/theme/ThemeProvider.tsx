import React from 'react';
import {
  ThemeProvider as BaseProvider,
  ThemeProviderProps as BaseProps,
  Theme,
} from '@emotion/react';
import {theme} from './defaultTheme';

export interface ThemeProviderProps extends Omit<BaseProps, 'theme'> {
  theme?: Partial<Theme> | ((outerTheme: Theme) => Theme);
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...rest
}) => {
  return (
    <BaseProvider theme={theme} {...rest}>
      {children}
    </BaseProvider>
  );
};
