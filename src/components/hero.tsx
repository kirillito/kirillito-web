/** @jsx jsx */
import { Flex, Box, jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"
import Avatar from "./avatar"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>

      </UpDown>
      <UpDownWide>

      </UpDownWide>

    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.7} offset={offset} factor={factor}>
      <Inner>
        <Box>
          <Flex>
            <Avatar url="/images/photo.jpg" />
          </Flex>
          <Intro />
          </Box>
      </Inner>
    </Content>
  </div>
)

export default Hero
