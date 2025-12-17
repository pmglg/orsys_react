import type { ImageInterface, MemeInterface } from 'orsys-tjs-meme';
import React from 'react'



export type IMemeFormProps = IMemeSvgViewerStored & {
  image: ImageInterface;
  meme: MemeInterface;
  basePath?;
};
