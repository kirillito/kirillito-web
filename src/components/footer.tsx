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
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <img width="30" height="30" src="https://lh3.googleusercontent.com/-fXH_6YYk0tQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnP_j-R7cjwpc6d32pPeqx8P8JyYA.CMID/s83-c/photo.jpg" alt="Kirillito Logo" />
        {` `}
        <Link
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 2 }}
          href="https://github.com/kirillito/kirillito-web"
        >
          Theme
        </Link>
        <div sx={{ mx: 1 }}>by</div>
        {` `}
        <Link aria-label="Link to the website" href="https://github.com/kirillito">
          Kirillito
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
