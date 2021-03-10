import React from 'react';
import useToggle from 'react-use/lib/useToggle';

import Pressable, {PressableProps} from './Pressable';
import Text from './Text';

export interface ButtonProps extends PressableProps {
  label: string;
}

const defaultColorScheme = {
  50: '#ffe6e6',
  100: '#f5bfbf',
  200: '#e89797',
  300: '#dd6e6f',
  400: '#d24646',
  500: '#b92d2d',
  600: '#912222',
  700: '#681718',
  800: '#410c0d',
  900: '#1d0101',
};

const Button: React.FC<ButtonProps> = (props) => {
  const {label, ...rest} = props;
  const [pressed, togglePressed] = useToggle(false);
  const pressedOutColor = defaultColorScheme[500];
  const pressedInColor = defaultColorScheme[600];

  return (
    <Pressable
      paddingY={3}
      paddingX={3}
      borderRadius={9}
      bg={pressed ? pressedInColor : pressedOutColor}
      onPressIn={() => togglePressed(true)}
      onPressOut={() => togglePressed(false)}
      {...rest}>
      <Text color="white" fontSize={16} fontWeight="800">
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;
