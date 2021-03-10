import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import styled from '@emotion/native';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  FontSizeProps,
  fontStyle,
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
    FontSizeProps,
    SpaceProps {}

export interface InputProps extends InputStyleProps, TextInputProps {}

export const textStyle = compose(
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  fontStyle,
);

const BaseInput = styled(TextInput)<InputProps>(textStyle);

const Input: React.FC<InputProps> = (props) => (
  <BaseInput
    py={10}
    px={15}
    fontSize={20}
    borderWidth={1}
    borderColor="gray"
    borderRadius={8}
    minWidth="100%"
    {...props}
  />
);

export default Input;
