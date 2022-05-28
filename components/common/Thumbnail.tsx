import React from 'react'
import Image from 'next/image'

type ThumbnailProps = React.ComponentProps<typeof Image>

export const Thumbnail = (props: ThumbnailProps) => (
  <div className="shadow-lg rounded-xl overflow-hidden">
    <Image sizes="100vw" {...props} />
  </div>
)
