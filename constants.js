export const COLORS = {
  white: "hsl(0deg 0% 100%)",
  offWhite: "hsl(229deg 52% 96%)",
  primary: "hsl(235deg 35% 18%)",
  primaryDark: "hsl(234deg 39% 14%)",
  highlight: "hsl(0deg 91% 71%)",
  secondary: "hsl(227deg 100% 92%)",
  backgroundGradient: `linear-gradient(
    315deg, 
    hsl(234deg 33% 27%) 0%, 
    hsl(235deg 49% 11%) 100%
    );`,
  shadow: `
  -50px -50px 100px  hsla(234deg, 40% , 25% , 100%),
  50px 50px 100px  hsla(234deg, 45% , 13% , 100%)
  `,
};

export const WEIGHTS = {
  normal: 400,
  bold: 700,
};

export const BREAKPOINTS = {
  tabletMin: 768,
  desktopMin: 1440,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
      (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
      (max-width: ${(BREAKPOINTS.desktopMin - 1) / 16}rem)`,
};

export const FAMILIES = {
  sansSerif:
    '"Kumbh Sans", Helvetica, "Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", sans-serif',
};
