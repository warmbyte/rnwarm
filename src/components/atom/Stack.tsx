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
    const wrappedChildren = (
      <Box key={index} marginRight={margin} marginBottom={margin}>
        {child}
      </Box>
    );

    return wrappedChildren;
  });

  return <Box {...rest}>{clones}</Box>;
};

export default Stack;
