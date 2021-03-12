import {getContrast} from 'polished';

const dark = '#262626';
const light = '#ffffff';

const cache: Record<string, string> = {};
export const getColorContrast = (color: string) => {
  if (cache[color]) {
    return cache[color];
  }

  const darkScore = getContrast(color, dark);
  const lightScore = getContrast(color, light);

  console.log(darkScore, lightScore);

  if (darkScore > lightScore) {
    cache[color] = dark;
    return dark;
  } else {
    cache[color] = light;
    return light;
  }
};
