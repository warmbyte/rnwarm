import {Text as BaseText, TextProps as BaseProps} from 'react-native';
import styled from '@emotion/native';
import {
  ColorProps,
  FlexProps,
  SpaceProps,
  TextStyleProps,
  TextColorProps,
  TextAlignProps,
  TextShadowProps,
  TypographyProps,
  color,
  flexbox,
  space,
  textStyle as textStyleBase,
  textColor,
  textAlign,
  textShadow,
  typography,
  compose,
} from 'styled-system';

export interface TextProps
  extends BaseProps,
    ColorProps,
    FlexProps,
    SpaceProps,
    TextStyleProps,
    TextColorProps,
    TextAlignProps,
    TextShadowProps,
    TypographyProps {}

export const textStyle = compose(
  color,
  flexbox,
  space,
  textStyleBase,
  typography,
  textColor,
  textAlign,
  textShadow,
);

const Text = styled(BaseText)<TextProps>(textStyle);

export default Text;
