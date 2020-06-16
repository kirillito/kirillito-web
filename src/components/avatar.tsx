/** @jsx jsx */
import { jsx } from "theme-ui"
import { bounceOutAnimation } from "../styles/animations"

const Avatar = ({ targetLink, url }: { targetLink: string, url: string }) => (
    <a href={ targetLink } title="Say Hi!">
      <img
        sx={{
          display: `block`,
          width: 160,
          height: 160,
          borderRadius: `50%`,
          "--box-shadow-color": theme => `${theme.colors.borders}`,
          boxShadow: theme => `0 0 0 5px ${theme.colors.borders}`,
          "&:hover": {
            cursor: `pointer`, 
            color: `secondary`,
            animation: bounceOutAnimation(`2s`),
            animationIterationCount: 10
          }
        }} 
        src={ url }
        alt="Kirill Bredikhin photo" />
    </a>
)

export default Avatar
