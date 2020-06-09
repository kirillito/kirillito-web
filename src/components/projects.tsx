/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"

import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import ProjectsMDX from "../sections/projects"
import SVG from "./svg"

const Projects = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const [ colorMode, setColorMode ] = useColorMode();
  const isDark = colorMode === `dark`;

  return (
    <div>
      <Divider
        bg="secondary"
        sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
        speed={-0.2}
        offset={1.1}
        factor={factor}
      />
      <Content speed={0.7} offset={offset } factor={factor}>
        <Inner>
          <div
            sx={{
              display: `grid`,
              gridGap: [4, 4, 4, 5],
              gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
              h2: { gridColumn: `-1/1` },
            }}
          >
            <ProjectsMDX />
          </div>
        </Inner>
      </Content>
      {isDark ? 
      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <SVG icon="star2" width={8} color="white" left="70%" top="20%" />
          <SVG icon="star1" width={8} color="white" left="25%" top="5%" />
          <SVG icon="star2" hiddenMobile width={24} color="white" left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="star1" hiddenMobile width={16} color="white" left="20%" top="90%" />
          <SVG icon="star1" width={12} color="white" left="90%" top="30%" />
          <SVG icon="star1" width={16} color="white" left="70%" top="90%" />
          <SVG icon="star2" hiddenMobile width={16} color="white" left="18%" top="75%" />
        </UpDownWide>
        <SVG icon="star1" hiddenMobile width={6} color="white" left="4%" top="20%" />
        <SVG icon="star1" width={12} color="white" left="80%" top="60%" />
        <SVG icon="star2" width={12} color="white" left="29%" top="26%" />
        <SVG icon="star2" width={16} color="white" left="75%" top="30%" />
      </Divider>
      :
      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <SVG icon="cloud1" width={66} color="white" left="85%" top="75%" />
          <SVG icon="cloud1" width={98} color="white" left="25%" top="5%" />
          <SVG icon="cloud2" hiddenMobile width={240} color="white" left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="cloud1" hiddenMobile width={160} color="white" left="20%" top="90%" />
          <SVG icon="cloud1" width={124} color="white" left="90%" top="30%" />
          <SVG icon="cloud1" width={180} color="white" left="70%" top="90%" />
          <SVG icon="cloud2" hiddenMobile width={166} color="white" left="18%" top="75%" />
        </UpDownWide>
        <SVG icon="cloud1" hiddenMobile width={140} color="white" left="80%" top="60%" />
        <SVG icon="cloud2" width={150} color="white" left="29%" top="26%" />
        <SVG icon="cloud2" width={190} color="white" left="75%" top="30%" />
        <SVG icon="cloud2" width={84} color="white" left="80%" top="70%" /> 
      </Divider>
      }
    </div>
    )
  }

export default Projects
