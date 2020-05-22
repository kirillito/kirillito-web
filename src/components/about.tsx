/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"

import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import AboutMDX from "../sections/about"

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="secondary"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="star1" hiddenMobile width={6} color="white" left="50%" top="75%" />
        <SVG icon="star2" hiddenMobile width={8} color="white" left="70%" top="20%" />
        <SVG icon="star1" width={8} color="white" left="25%" top="5%" />
        <SVG icon="star2" hiddenMobile width={24} color="white" left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="star1" hiddenMobile width={16} color="white" left="5%" top="80%" />
        <SVG icon="star2" width={12} color="white" left="95%" top="50%" />
        <SVG icon="star1" hiddenMobile width={6} color="white" left="85%" top="15%" />
        <SVG icon="star2" hiddenMobile width={8} color="white" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="star2" hiddenMobile width={6} color="white" left="4%" top="20%" />
      <SVG icon="star2" width={12} color="white" left="70%" top="60%" />
      <SVG icon="star1" width={6} color="white" left="10%" top="10%" />
      <SVG icon="star1" width={12} color="white" left="20%" top="30%" />
      <SVG icon="star1" width={8} color="white" left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About