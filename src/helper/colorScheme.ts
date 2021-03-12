type Color = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type Colors = Record<string, Color>;

const defaultColor = {
  50: '#FFF5F5',
  100: '#FED7D7',
  200: '#FEB2B2',
  300: '#FC8181',
  400: '#F56565',
  500: '#E53E3E',
  600: '#C53030',
  700: '#9B2C2C',
  800: '#822727',
  900: '#63171B',
};

export const getScheme = (colors: Colors, color?: string) => {
  if (!color) {
    return defaultColor;
  }

  if (colors[color]) {
    return colors[color];
  }

  return defaultColor;
};
