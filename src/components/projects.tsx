/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"

import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import ProjectsMDX from "../sections/projects"

const Projects = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="secondary"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
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
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>

      </UpDown>
      <UpDownWide>

      </UpDownWide>

    </Divider>
  </div>
)

export default Projects
