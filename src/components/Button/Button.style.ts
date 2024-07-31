import { css } from 'styled-components'
export const buttonSize = {
  half: css`
    width: '46%';
    height: '47px';
  `,
  full: css`
    width: '100%';
    height: '47px';
  `,
}

export const grayButtonColor = {
  normal: css`
    background-color: #efefef;
    color: #111111;
  `,
}
export const yellowButtonColor = {
  normal: css`
    background-color: #fdd100;
    color: #ffffff;
  `,
}

export const buttonType = {
  gray: grayButtonColor,
  yellow: yellowButtonColor,
}

export const fontWeight = {
  SemiBold: css`
    font-weight: 600;
  `,
  Bold: css`
    font-weight: 700;
  `,
  ExtraBold: css`
    font-weight: 800;
  `,
}
