import { DefaultTheme } from 'styled-components'

export const colors = {
  orange: '#f87f01',
  yellow: '#fdd100',
  mintGreen: '#e7f0ed',
  navy: '#435969',
}

interface Font {
  font: string
  weight: number
  size: number
  lineHeight: number
}

const FONT = ({ font, weight, size, lineHeight }: Font): string => {
  return `
        font-family : "${font}";
        font-weight : ${weight};
        font-size : ${size}rem;
        line-height : ${lineHeight}%;
        `
}

export const fonts = {
  // 제목
  title1: FONT({
    font: 'SUITE-Regular',
    weight: 700,
    size: 2.4,
    lineHeight: 32,
  }),
  title2: FONT({
    font: 'SUITE-Regular',
    weight: 700,
    size: 2.0,
    lineHeight: 28,
  }),

  // 본문
  body1: FONT({
    font: 'SUITE-Regular',
    weight: 700,
    size: 2.0,
    lineHeight: 25,
  }),
  body2: FONT({
    font: 'SUITE-Regular',
    weight: 500,
    size: 1.5,
    lineHeight: 26,
  }),
  body3: FONT({
    font: 'SUITE-Regular',
    weight: 500,
    size: 1.4,
    lineHeight: 24,
  }),
  body4: FONT({
    font: 'SUITE-Regular',
    weight: 700,
    size: 1.3,
    lineHeight: 22,
  }),
  body5: FONT({
    font: 'SUITE-Regular',
    weight: 700,
    size: 1.2,
    lineHeight: 20,
  }),
  body6: FONT({
    font: 'SUITE-Regular',
    weight: 500,
    size: 1.1,
    lineHeight: 18,
  }),
}

export type ColorsTypes = typeof colors
export type FontsTypes = typeof fonts

export const theme: DefaultTheme = {
  colors,
  fonts,
}
