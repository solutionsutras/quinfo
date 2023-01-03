import assets from "./assets";
const COLORS = {
  primary: '#001F2D',
  secondary: '#4D626C',
  danger: '"#770000"',
  white: '#FFF',
  gray: '#74858C',
  headerTheme1: '#136641',
  headerTheme2: '#FF9702',
  headerTheme3: '#87CEEB',
  headerTheme4: '#1499F0',
  buttons: '#047BD5',
  grey1: '#43484d',
  grey2: '#526977',
  grey3: '#86939e',
  grey4: '#bdc6cf',
  grey5: '#e1e8ee',
  grey6: '#F6F6F6',
  CardComment: '#86939e',
  cardBackground: '#FFFFFF',
  statusbar: '#046BD0',
  headerText: '#FFFFFF',
  background2: '#F0F0F0',
  lightgreen: '#66DF48',
  black: '#1F1F1F',
};

const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

const FONTS = {
  bold: "InterBold",
  semiBold: "InterSemiBold",
  medium: "InterMedium",
  regular: "InterRegular",
  light: "InterLight",
};

const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
};

export { assets, COLORS, SHADOWS, SIZES, FONTS };