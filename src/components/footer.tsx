/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      <div sx={{
          fontSize: 1,
          color: `text`
        }}>
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </div>
      <Flex
        sx={{
          fontSize: 1,
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        Built with React <img src="images/react.svg" width="40px" /> and Gatsby&nbsp;<img src="images/gatsby.svg" width="26px" />
      </Flex>
    </Box>
  )
}

export default Footer
