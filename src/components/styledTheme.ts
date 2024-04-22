"use client"

import { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const lightColors = {
  backgroundDark: "#6a2626",
  backgroundDarkSecondary: "#842f2f",
  background: "#743d3d",
  backgroundSecondary: "#6a3a3a",
  textPrimary: "#cc9b7e",
  textPrimaryDesaturated: "#a99082",
};

const darkColors = {
  backgroundDark: "#6a2626",
  backgroundDarkSecondary: "#842f2f",
  background: "#743d3d",
  backgroundSecondary: "#6a3a3a",
  textPrimary: "#cc9b7e",
  textPrimaryDesaturated: "#a99082",
};

const commonP = css`
  font-family: Inter;
  font-size: 16px;
  margin: 0;
`;

const defaultPs = {
  standardP: css`
    ${commonP}
    font-size: 16px;
  `,
  smallP: css`
    ${commonP}
    font-size: 12px;
  `,
  smallestP: css`
    ${commonP}
    font-size: 8px;
  `,
};

export const LightTheme: DefaultTheme = {
  ...lightColors,
  ...defaultPs,
  themeName: "light",
};

export const DarkTheme: DefaultTheme = {
  ...darkColors,
  ...defaultPs,
  themeName: "dark",
};
