const colorNames = {
  scienceBlue: "#0366D6",
  blumine: "#1F5189",
  dodgerBlue: "#2188FF",
  shipCove: "#6D93BE",
  anakiwa: "#8CC2FF",
  tropicalBlue: "#CDE0F7",
  ironTransparent: "rgba(209, 213, 218, 0.3)",
  white: '#FFFFFF',
  whiteLilac: '#FBFBFE',
  porcelain: "#F2F3F4",
  mercury: "#e5e5e5",
  slateGray: '#6E7E91',
  doveGray: "#6D6D6D",
  tundora: "#414141",
  mineShaft: '#252525',
  mineShaftLighter: '#313131',
};

export const common = {
  breakpoints: {
    mobileMax: 767,
    tabletVerticalMax: 991,
    tabletHorizontalMax: 1199,
  },
  boxShadow: "0px 16px 58px 0px #090A3308",
  //box-shadow: 0px -2px 50px 0px #090A3305;
  borderRadiusSmall: "4px",
};

export const themeLight = {
  ...common,
  colors: {
    primary: colorNames.scienceBlue,
    textPrimary: colorNames.mineShaft,
    accent: colorNames.dodgerBlue,
    white: colorNames.white,
    site: {
      background: colorNames.whiteLilac,
      text: colorNames.slateGray,
    },
    themeSwitch: {
      background: colorNames.mercury,
      icon: colorNames.white,
    },
    boxBackground: colorNames.white,
    headerLine: colorNames.mercury,
  },
};

export const themeDark = {
  ...common,
  colors: {
    primary: colorNames.dodgerBlue,
    textPrimary: colorNames.white,
    accent: colorNames.scienceBlue,
    white: colorNames.white,
    site: {
      background: colorNames.mineShaft,
      text: colorNames.white,
    },
    themeSwitch: {
      background: colorNames.doveGray,
      icon: colorNames.mineShaft,
    },
    boxBackground: colorNames.mineShaftLighter,
    headerLine: colorNames.tundora,
  },
};
