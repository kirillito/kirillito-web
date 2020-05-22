/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { hidden } from "../styles/utils"

const icons = {
  star1: {
    shape: (
      <g transform="matrix(.13393 0 0 .13393 167.72 -40.805)">
        <path d="m-902.32 304.68-28.04 302.41-115.18-95.635 95.635 115.18-302.41 28.04 302.41 28.039-95.636 115.18 115.18-95.634 28.04 302.41 28.039-302.41 115.18 95.635-95.635-115.18 302.41-28.039-302.41-28.04 95.634-115.18-115.18 95.636z"/>
      </g>
    ),
    viewBox: `0 0 100 100`,
  },
  star2: {
    shape: (
      <g transform="matrix(.13393 0 0 .13393 167.72 -40.805)">
        <path d="m-902.32 304.68-28.04 302.41-115.18-95.635 95.635 115.18-302.41 28.04 302.41 28.039-95.636 115.18 115.18-95.634 28.04 302.41 28.039-302.41 115.18 95.635-95.635-115.18 302.41-28.039-302.41-28.04 95.634-115.18-115.18 95.636z"/>
      </g>
    ),
    viewBox: `0 0 100 100`,
  }
}

type IconType = "star1" | "star2"

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: number
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

const defaultProps = {
  stroke: false,
  hiddenMobile: false,
}

const SVG = ({ stroke, color, width, icon, left, top, hiddenMobile }: SVGProps) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </svg>
)

export default SVG

SVG.defaultProps = defaultProps 