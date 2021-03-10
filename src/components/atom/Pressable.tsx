import {
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
} from 'react-native';
import styled from '@emotion/native';

import {BoxStyleProps, boxStyle} from './Box';

export interface PressableProps extends BoxStyleProps, RNPressableProps {}

const Pressable = styled(RNPressable)<PressableProps>(boxStyle);

export default Pressable;
