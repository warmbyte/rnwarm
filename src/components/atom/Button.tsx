import React from 'react';
import useToggle from 'react-use/lib/useToggle';

import Pressable, {PressableProps} from './Pressable';
import Text from './Text';
import {getColorContrast} from '../../helper/contrast';
import {getScheme} from '../../helper/colorScheme';
import {baseStyleButton, baseStyleButtonText, useTheme} from '../../theme';

export interface ButtonProps extends PressableProps {
  label: string;
  colorScheme?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {label, colorScheme, ...rest} = props;
  const theme = useTheme();
  const colors = theme?.global?.colors ?? {};
  const themeProps = theme?.components?.Button ?? {};

  const scheme = getScheme(colors, colorScheme);
  const [pressed, togglePressed] = useToggle(false);
  const pressedOutColor = scheme[600];
  const pressedInColor = scheme[700];
  const textColor = getColorContrast(pressedOutColor);

  return (
    <Pressable
      bg={pressed ? pressedInColor : pressedOutColor}
      onPressIn={() => togglePressed(true)}
      onPressOut={() => togglePressed(false)}
      {...baseStyleButton}
      {...themeProps}
      {...rest}>
      <Text color={textColor} {...baseStyleButtonText}>
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;
