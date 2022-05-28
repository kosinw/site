import React from 'react'
import Link from 'next/link'

type HyperlinkProps = React.ComponentProps<typeof Link>

export const Hyperlink = (props: HyperlinkProps) => (
  <Link {...props}>
    <a
      target="_blank"
      className="text-primary hover:bg-foreground hover:text-white"
    >
      {props.children}
    </a>
  </Link>
)
