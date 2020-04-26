import theme from 'tailwindcss/defaultTheme';

export const useTailwindTheme = () => {
  const { colors } = theme;
  return { colors };
};
