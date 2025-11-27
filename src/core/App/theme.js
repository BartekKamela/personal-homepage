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

};

export const themeLight = {
  ...common,
  colors: {
    primary: colorNames.scienceBlue,
    textPrimary: colorNames.mineShaft,
    site: {
      background: colorNames.whiteLilac,
      text: colorNames.slateGray,
    },
    themeSwitch: {
    background: colorNames.mercury,
    icon: colorNames.white,
  },
  },
};

export const themeDark = {
  ...common,
  colors: {
    primary: colorNames.dodgerBlue,
    textPrimary: colorNames.white,
    site: {
      background: colorNames.mineShaft,
      text: colorNames.white,
    },
    themeSwitch: {
    background: colorNames.doveGray,
    icon: colorNames.mineShaft,
  },
  },
};