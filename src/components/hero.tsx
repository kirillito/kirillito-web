/** @jsx jsx */
import { Flex, Box, jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"
import Avatar from "./avatar"
import SVG from "./svg"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
    <UpDown>
        <SVG icon="star1" hiddenMobile width={48} color="white" left="10%" top="20%" />
        <SVG icon="star2" width={48} color="white" left="60%" top="70%" />
        <SVG icon="star1" width={6} color="white" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="star1" hiddenMobile width={16} color="white" left="80%" top="10%" />
        <SVG icon="star1" width={12} color="white" left="90%" top="50%" />
        <SVG icon="star1" width={16} color="white" left="70%" top="90%" />
        <SVG icon="star1" width={16} color="white" left="30%" top="65%" />
        <SVG icon="star2" width={16} color="white" left="28%" top="15%" />
        <SVG icon="star2" width={6} color="white" left="75%" top="10%" />
        <SVG icon="star2" hiddenMobile width={8} color="white" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="star1" hiddenMobile width={24} color="white" left="5%" top="70%" />
      <SVG icon="star1" width={6} color="white" left="4%" top="20%" />
      <SVG icon="star1" width={12} color="white" left="50%" top="60%" />
      <SVG icon="star1" width={8} color="white" left="95%" top="90%" />
      <SVG icon="star1" hiddenMobile width={24} color="white" left="40%" top="80%" />
      <SVG icon="star1" width={8} color="white" left="25%" top="5%" />
      <SVG icon="star2" width={64} color="white" left="95%" top="5%" />
      <SVG icon="star2" hiddenMobile width={64} color="white" left="5%" top="90%" />
      <SVG icon="star2" width={6} color="white" left="10%" top="10%" />
      <SVG icon="star2" width={12} color="white" left="40%" top="30%" />
      <SVG icon="star2" width={16} color="white" left="10%" top="50%" />
      <SVG icon="star2" width={8} color="white" left="80%" top="70%" /> 
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.7} offset={offset} factor={factor}>
      <Inner>
        <Box>
          <Flex>
            <Avatar url="images/photo.jpg" />
          </Flex>
          <Intro />
          </Box>
      </Inner>
    </Content>
  </div>
)

export default Hero
