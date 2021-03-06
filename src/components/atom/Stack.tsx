import React from 'react';
import {getValidChildren} from '@chakra-ui/utils';
import Box, {BoxProps} from './Box';

export interface StackProps extends BoxProps {
  spacing?: number;
}

const Stack: React.FC<StackProps> = ({spacing, children, ...rest}) => {
  const validChildren = getValidChildren(children);

  const clones = validChildren.map((child, index) => {
    const isLastChild = index + 1 === validChildren.length;
    const margin = isLastChild ? 0 : spacing;
    const {
      flex,
      flexDirection,
      flexGrow,
      flexBasis,
      width,
      height,
    } = child.props;
    const wrappedChildren = (
      <Box
        key={index}
        flex={flex}
        flexDirection={flexDirection}
        flexGrow={flexGrow}
        flexBasis={flexBasis}
        width={width}
        height={height}
        marginRight={
          rest.flexDirection === 'row' || rest.flexDirection === 'row-reverse'
            ? margin
            : undefined
        }
        marginBottom={
          rest.flexDirection === 'column' ||
          rest.flexDirection === 'column-reverse'
            ? margin
            : undefined
        }>
        {child}
      </Box>
    );

    return wrappedChildren;
  });

  return <Box {...rest}>{clones}</Box>;
};

Stack.defaultProps = {
  flexDirection: 'column',
};

export default Stack;
