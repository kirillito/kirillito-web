/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"

import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import AboutMDX from "../sections/about"

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const [ colorMode, setColorMode ] = useColorMode();
  const isDark = colorMode === `dark`;

  return (
    <div>
      <Divider
        speed={0.2}
        offset={offset}
        factor={factor}
      />
      {isDark ? 
      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <SVG icon="star1" hiddenMobile width={16} color="white" left="50%" top="75%" />
          <SVG icon="star2" hiddenMobile width={12} color="white" left="70%" top="20%" />
          <SVG icon="star1" width={12} color="white" left="25%" top="5%" />
          <SVG icon="star2" hiddenMobile width={26} color="white" left="80%" top="80%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="star1" hiddenMobile width={18} color="white" left="5%" top="80%" />
          <SVG icon="star2" width={16} color="white" left="95%" top="50%" />
          <SVG icon="star1" hiddenMobile width={10} color="white" left="85%" top="15%" />
        </UpDownWide>
        <SVG icon="star2" hiddenMobile width={14} color="white" left="4%" top="20%" />
        <SVG icon="star1" width={24} color="white" left="20%" top="30%" />
        <SVG icon="star1" width={12} color="white" left="80%" top="70%" />
      </Divider>
      :
      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <SVG icon="cloud1" hiddenMobile width={36} color="white" left="50%" top="75%" />
          <SVG icon="cloud2" hiddenMobile width={48} color="white" left="70%" top="20%" />
          <SVG icon="cloud1" width={48} color="white" left="25%" top="5%" />
          <SVG icon="cloud2" hiddenMobile width={124} color="white" left="80%" top="80%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="cloud1" hiddenMobile width={78} color="white" left="5%" top="80%" />
          <SVG icon="cloud2" width={124} color="white" left="95%" top="50%" />
          <SVG icon="cloud1" hiddenMobile width={36} color="white" left="85%" top="15%" />
        </UpDownWide>
        <SVG icon="cloud2" hiddenMobile width={36} color="white" left="4%" top="20%" />
        <SVG icon="cloud1" width={124} color="white" left="20%" top="30%" />
        <SVG icon="cloud1" width={48} color="white" left="80%" top="70%" />
      </Divider>
      }
      <Content speed={0.7} offset={offset} factor={factor}>
        <Inner>
          <AboutMDX />
        </Inner>
      </Content>
    </div>
  );
}

export default About
