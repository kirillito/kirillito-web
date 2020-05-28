/** @jsx jsx */
import { Flex, Box, jsx, useColorMode } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"
import Avatar from "./avatar"
import SVG from "./svg"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const [ colorMode, setColorMode ] = useColorMode();
  const isDark = colorMode === `dark`;

  return (
    <div>
      {isDark ?
      <Divider speed={0.2} offset={offset} factor={factor}>
        <UpDown>
          <SVG icon="star1" hiddenMobile width={42} color="white" left="10%" top="20%" />
          <SVG icon="star2" width={42} color="white" left="60%" top="70%" />
          <SVG icon="star1" width={14} color="white" left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="star1" hiddenMobile width={22} color="white" left="80%" top="10%" />
          <SVG icon="star1" width={18} color="white" left="90%" top="50%" />
          <SVG icon="star1" width={22} color="white" left="70%" top="90%" />
          <SVG icon="star1" width={22} color="white" left="30%" top="65%" />
          <SVG icon="star2" width={22} color="white" left="28%" top="15%" />
          <SVG icon="star2" width={12} color="white" left="75%" top="10%" />
          <SVG icon="star2" hiddenMobile width={14} color="white" left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="star1" hiddenMobile width={30} color="white" left="5%" top="70%" />
        <SVG icon="star1" width={1} color="white" left="4%" top="20%" />
        <SVG icon="star1" width={18} color="white" left="50%" top="60%" />
        <SVG icon="star1" width={14} color="white" left="95%" top="90%" />
        <SVG icon="star1" hiddenMobile width={30} color="white" left="40%" top="80%" />
        <SVG icon="star1" width={14} color="white" left="25%" top="5%" />
        <SVG icon="star2" width={56} color="white" left="95%" top="5%" />
        <SVG icon="star2" hiddenMobile width={56} color="white" left="5%" top="90%" />
        <SVG icon="star2" width={12} color="white" left="10%" top="10%" />
        <SVG icon="star2" width={18} color="white" left="40%" top="30%" />
        <SVG icon="star2" width={22} color="white" left="10%" top="50%" />
        <SVG icon="star2" width={14} color="white" left="80%" top="70%" /> 
      </Divider>
      :
      <Divider speed={0.2} offset={offset} factor={factor}>
        <UpDown>
          <SVG icon="cloud1" hiddenMobile width={280} color="white" left="10%" top="20%" />
          <SVG icon="cloud2" width={320} color="white" left="60%" top="70%" />
          <SVG icon="cloud1" width={86} color="white" left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="cloud1" hiddenMobile width={180} color="white" left="80%" top="10%" />
          <SVG icon="cloud1" width={160} color="white" left="90%" top="50%" />
          <SVG icon="cloud1" width={190} color="white" left="70%" top="90%" />
          <SVG icon="cloud1" width={195} color="white" left="30%" top="65%" />
          <SVG icon="cloud2" width={210} color="white" left="28%" top="15%" />
          <SVG icon="cloud2" width={66} color="white" left="75%" top="10%" />
          <SVG icon="cloud2" hiddenMobile width={68} color="white" left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="cloud1" hiddenMobile width={310} color="white" left="5%" top="70%" />
        <SVG icon="cloud1" width={86} color="white" left="4%" top="20%" />
        <SVG icon="cloud1" width={124} color="white" left="50%" top="60%" />
        <SVG icon="cloud1" width={68} color="white" left="95%" top="90%" />
        <SVG icon="cloud1" hiddenMobile width={210} color="white" left="40%" top="80%" />
        <SVG icon="cloud1" width={48} color="white" left="25%" top="5%" />
        <SVG icon="cloud2" width={420} color="white" left="95%" top="5%" />
        <SVG icon="cloud2" hiddenMobile width={420} color="white" left="5%" top="90%" />
        <SVG icon="cloud2" width={46} color="white" left="10%" top="10%" />
        <SVG icon="cloud2" width={110} color="white" left="40%" top="30%" />
        <SVG icon="cloud2" width={160} color="white" left="10%" top="50%" />
        <SVG icon="cloud2" width={68} color="white" left="80%" top="70%" /> 
      </Divider>
      }
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
  }

export default Hero
