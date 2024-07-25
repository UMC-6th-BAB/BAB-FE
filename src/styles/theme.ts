import { DefaultTheme } from 'styled-components'

export const colors = {
  orange: '#f87f01',
  yellow: '#fdd100',
  lightYellow: '#FFEE9C',
  mintGreen: '#e7f0ed',
  navy: '#435969',
  gray1: '#767676',
  gray2: '#FFEE9C',
  idGray: '#9A9A9A',
  lightGray: '#E7E7E7',
  black: '#000000',
  white: '#FFFFFF',
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
        font-size : ${size}px;
        line-height : ${lineHeight}%;
        `
}

export const fonts = {
  // 제목
  title1: FONT({
    font: 'SUITE-Regular',
    weight: 900,
    size: 24,
    lineHeight: 32,
  }),
  title2: FONT({
    font: 'SUITE-Regular',
    weight: 700,
    size: 20,
    lineHeight: 28,
  }),

  // 본문
  body1: FONT({
    font: 'SUITE-Regular',
    weight: 700,
    size: 20,
    lineHeight: 25,
  }),
  body2: FONT({
    font: 'SUITE-Regular',
    weight: 500,
    size: 15,
    lineHeight: 26,
  }),
  body3: FONT({
    font: 'SUITE-Regular',
    weight: 500,
    size: 14,
    lineHeight: 24,
  }),
  body4: FONT({
    font: 'SUITE-Regular',
    weight: 700,
    size: 13,
    lineHeight: 22,
  }),
  body5: FONT({
    font: 'SUITE-Regular',
    weight: 700,
    size: 12,
    lineHeight: 20,
  }),
  body6: FONT({
    font: 'SUITE-Regular',
    weight: 500,
    size: 11,
    lineHeight: 18,
  }),
}

export type ColorsTypes = typeof colors
export type FontsTypes = typeof fonts

export const theme: DefaultTheme = {
  colors,
  fonts,
}
