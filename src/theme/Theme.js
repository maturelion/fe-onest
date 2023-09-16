const darktheme = {
  primary: "#05BE71",
  border: "#ACE9D0",
  hover: "#049E5E",
  secondary: "#7443FF",
  secondaryBorder: "#D1C0FF",
  secondaryHover: "#6138D4",
  success: "#50BC32",
  info: "#1368F9",
  warning: "#FFC300",
  danger: "#FE324E",
  neutral1: "#FFFFFF",
  neutral2: "#ECECEC",
  neutral3: "#B1B1B1",
  neutral4: "#909090",
  neutral5: "#606060",
  neutral6: "#404040",
  neutral7: "#2D2D2D",
  neutral8: "#272727",
  background: "#272727",
};

const lightTheme = {
  primary: "#05BE71",
  border: "#ACE9D0",
  hover: "#049E5E",
  secondary: "#7443FF",
  secondaryBorder: "#D1C0FF",
  secondaryHover: "#6138D4",
  success: "#50BC32",
  info: "#1368F9",
  warning: "#FFC300",
  danger: "#FE324E",
  dangerHover: "#D42A41",
  neutral1: "#272727",
  neutral2: "#2D2D2D",
  neutral3: "#404040",
  neutral4: "#606060",
  neutral5: "#909090",
  neutral6: "#B1B1B1",
  neutral7: "#ECECEC",
  neutral8: "#FFFFFF",
  background: "#fff",
};

const defaultTheme = {
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "28px",
  },

  borderRadius: {
    small: "8px",
    medium: "12px",
    large: "15px",
    circle: "50%",
  },
};

const theme = {
  dark: {
    color: darktheme,
    ...defaultTheme,
  },
  light: {
    color: lightTheme,
    ...defaultTheme,
  },
};

export default theme;
