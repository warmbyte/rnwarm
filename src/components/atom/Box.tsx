import {View, ViewProps} from 'react-native';
import styled from '@emotion/native';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
} from 'styled-system';

export interface BoxStyleProps
  extends BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps {}

export interface BoxProps extends BoxStyleProps, ViewProps {}

export const boxStyle = compose(
  border,
  color,
  flexbox,
  layout,
  position,
  space,
);

const Box = styled(View)<BoxProps>(boxStyle);

export default Box;
