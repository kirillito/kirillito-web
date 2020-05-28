import { merge } from "theme-ui"
import { bootstrap } from "@theme-ui/presets"

const palette = {
  color1: `#264653`,
  color2: `#e76f51`,
  color3: `#2a9d8f`,
  color4: `#f4a261`,
  color5: `#e9c46a`,
  color6: `#269081`,
  warm: `#e76f51`,
  warmer: `#f4a261`,
  cold: `#264653`,
  colder: `#539D96`,
}

const paletteLight = {
  color1: `#BEDADD`,
  color2: `#a0d3ff`,
  color3: `#F6E58A`,
  color4: `#FBCE8C`,
  color5: `#1B6B5A`,
  color6: `#a0d3ff`,
  warm: `#f4a261`,
  warmer: `#e76f51`,
  cold: `#2a9d8f`,
  colder: `#9EF5F4`,
}

export default merge(bootstrap, {
  initialColorModeName: `dark`,
  useCustomProperties: true,
  colors: {
    primary: palette.color4,
    secondary: palette.color6,
    text: bootstrap.colors.white,
    heading: bootstrap.colors.white,
    background: palette.color1,
    borders: palette.color2,
    divider: palette.color3,
    links: palette.color5,
    textMuted: bootstrap.colors.gray,
    warm: palette.warm,
    warmer: palette.warmer,
    cold: palette.cold,
    colder: palette.colder,
    modes: {
      light: {
        primary: paletteLight.color4,
        secondary: paletteLight.color6,
        text: bootstrap.colors.black,
        heading: bootstrap.colors.black,
        background: paletteLight.color1,
        borders: paletteLight.color2,
        divider: paletteLight.color3,
        links: paletteLight.color5,
        warm: palette.warm,
        warmer: palette.warmer,
        cold: palette.cold,
        colder: palette.colder,
      },
    },
  },
  breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
  footer: {
    textAlign: `center`,
    display: `block`,
    position: `absolute`,
    bottom: 0,
    color: `textMuted`,
    px: [2, 3],
    py: [3, 4],
  },
  styles: {
    a: {
      color: `links`
    },
    root: {
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
      color: `text`,
      backgroundColor: `background`,
      a: {
        color: `links`,
        textDecoration: `none`,
        transition: `all 0.3s ease-in-out`,
        "&:hover": {
          color: `links`,
          textDecoration: `none`,
        },
      },
    },
    p: {
      fontSize: [1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      color: `text`
    },
    blockquote: {
      marginLeft: 0,
      p: {
        fontSize: [2, 3],
        fontWeight: `medium`,
        color: `heading`,
      },
    },
    h1: {
      fontSize: [6, 7, 8],
      mt: 2,
      mb: 3,
      textShadow: `rgba(255, 255, 255, 0.15) 0px 5px 35px`,
      letterSpacing: `wide`,
      color: `heading`,
    },
    h2: {
      fontSize: [4, 5, 6],
      mt: 2,
      mb: 2,
      color: `heading`,
    },
    h3: {
      fontSize: [3, 4, 5],
      mt: 3,
      color: `heading`,
    },
    h4: {
      fontSize: [2, 3, 4],
      color: `heading`,
    },
    h5: {
      fontSize: [1, 2, 3],
      color: `heading`,
    },
    h6: {
      fontSize: 1,
      mb: 2,
      color: `heading`,
    },
  },
  layout: {
    container: {
      maxWidth: `5xl`,
    },
  },
  buttons: {
    toggle: {
      color: `background`,
      border: `none`,
      backgroundColor: `text`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 2,
      ml: 3,
    },
  },
  texts: {
    bigger: {
      p: {
        fontSize: [2, 3, 4],
      },
    },
  },
})
