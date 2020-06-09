/** @jsx jsx */
import { jsx, Flex, useColorMode } from "theme-ui"
import styled from "@emotion/styled"
import Divider from "../elements/divider"
import Content from "../elements/content"

import { UpDown, UpDownWide, waveAnimation } from "../styles/animations"
import Footer from "./footer"
// @ts-ignore
import ContactMDX from "../sections/contact"
import SVG from "./svg"

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`

const Contact = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const [ colorMode, setColorMode ] = useColorMode();
  const isDark = colorMode === `dark`;

  return (
    <div>
      <Divider fill="secondary" speed={0.2} offset={offset} factor={factor}>
        <div sx={{ position: `absolute`, bottom: 0, width: `100%`, transform: `matrix(1, 0, 0, -1, 0, 0)` }}>
          <InnerWave sx={{ position: `relative`, height: `100%`, svg: { width: `100%`, height: `40vh` } }}>
            <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none">
              <path>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </InnerWave>
        </div>
      </Divider>
      <Content speed={0.4} offset={offset} factor={factor}>
        <h3>Stay in touch!</h3>
        <Flex>
          <div>
            <a href="https://github.com/kirillito" title="GitHub">
              <img src={isDark ? "images/github-dark.png" : "images/github-light.png"}  alt="GitHub logo"
                sx={{
                  width: 64,
                  height: 64,
                  margin: 6
                }} />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/bredikhinkn/" title="LinkedIn">
              <img src={isDark ? "images/linkedin-dark.png" : "images/linkedin-light.png"} alt="LinkedIn logo"
                sx={{
                  width: 64,
                  height: 64,
                  margin: 6
                }} />
            </a>
          </div>
          <div>
            <a href="mailto:bredikhinkn@gmail.com" title="Mail">
              <img src={isDark ? "images/mail-dark.png" : "images/mail-light.png"} alt="Email icon"
                sx={{
                  width: 64,
                  height: 64,
                  margin: 6
                }} />
            </a>
          </div>
        </Flex>
        <Footer />
      </Content>
      {isDark ? 
        <Divider speed={0.1} offset={offset} factor={factor}>
          <UpDown>
            <SVG icon="star1" hiddenMobile width={14} color="white" left="70%" top="20%" />
            <SVG icon="star2" width={14} color="white" left="25%" top="5%" />
          </UpDown>
          <UpDownWide>
            <SVG icon="star1" width={18} color="white" left="95%" top="50%" />
            <SVG icon="star2" width={12} color="white" left="85%" top="15%" />
            <SVG icon="star1" hiddenMobile width={14} color="white" left="45%" top="10%" />
          </UpDownWide>
          <SVG icon="star1" width={12} color="white" left="4%" top="20%" />
          <SVG icon="star2" width={18} color="white" left="20%" top="30%" />
          <SVG icon="star2" width={14} color="white" left="10%" top="60%" /> 
        </Divider>
        :
        <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <SVG icon="cloud1" hiddenMobile width={58} color="white" left="70%" top="20%" />
          <SVG icon="cloud2" width={68} color="white" left="25%" top="5%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="cloud1" width={128} color="white" left="95%" top="50%" />
          <SVG icon="cloud2" width={46} color="white" left="85%" top="15%" />
          <SVG icon="cloud1" hiddenMobile width={68} color="white" left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="cloud1" width={86} color="white" left="4%" top="20%" />
        <SVG icon="cloud2" width={160} color="white" left="20%" top="30%" />
        <SVG icon="cloud2" width={82} color="white" left="10%" top="60%" /> 
      </Divider>
      }
    </div>
    )
  }

export default Contact
