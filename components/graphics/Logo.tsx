import * as React from 'react'
import { SVGProps } from 'react'

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={12} fill="url(#a)" />
    <defs>
      <linearGradient
        id="a"
        x1={0}
        y1={0}
        x2={21.538}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#66A7E3" />
        <stop offset={1} stopColor="#9672FA" />
      </linearGradient>
    </defs>
  </svg>
)

export default SVGComponent
