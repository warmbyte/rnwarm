import {TextInput, TextInputProps} from 'react-native';
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

export interface InputStyleProps
  extends BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps {}

export interface InputProps extends InputStyleProps, TextInputProps {}

export const textStyle = compose(
  border,
  color,
  flexbox,
  layout,
  position,
  space,
);

const Input = styled(TextInput)<InputProps>(textStyle);

export default Input;
