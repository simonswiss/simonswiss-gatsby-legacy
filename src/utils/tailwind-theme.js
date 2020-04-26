import theme from 'tailwindcss/defaultTheme'

export function useTailwindTheme() {
  const { colors } = theme
  return { colors }
}
