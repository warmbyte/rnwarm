import {ImageProps as BaseProps} from 'react-native';
import styled from '@emotion/native';
import {compose, WidthProps, width, HeightProps, height} from 'styled-system';
import BaseImage from 'react-native-scalable-image';

// @ts-ignore
export interface ImageProps extends BaseProps, WidthProps, HeightProps {}

export const imageStyle = compose(width, height);

const Image = styled(BaseImage)<ImageProps>(imageStyle);

export default Image;
