import {Image as BaseImage, ImageProps as BaseProps} from 'react-native';
import styled from '@emotion/native';
import {compose, WidthProps, width, HeightProps, height} from 'styled-system';

// @ts-ignore
export interface ImageProps extends BaseProps, WidthProps, HeightProps {}

export const imageStyle = compose(width, height);

const Image = styled(BaseImage)<ImageProps>(imageStyle);

export default Image;
