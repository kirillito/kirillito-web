/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bgSchema: string
}

const ProjectCard = ({ link, title, children, bgSchema }: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      maxWidth: 500,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: (theme) => { // `linear-gradient(to right, ${theme.colors.warm} 0%, ${theme.colors.warmer} 100%)` /*{
        if (bgSchema === 'warm') {
          return `linear-gradient(to right, ${theme.colors.warm} 0%, ${theme.colors.warmer} 100%)`
        } else if (bgSchema === 'cold') {
          return `linear-gradient(to right, ${theme.colors.cold} 0%, ${theme.colors.colder} 100%)`
        } else {
          return `none`
        }
      },
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
    <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
        marginBottom: 10
      }}
    >
      {title}
    </div>
    <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
  </a>
)

export default ProjectCard
