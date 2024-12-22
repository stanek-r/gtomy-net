declare module 'react-lazy-load-image-component' {
  import React from 'react';

  export interface LazyLoadImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    placeholderSrc?: string;
    effect?: string;
    visibleByDefault?: boolean;
    height?: string | number;
    width?: string | number;
    delayMethod?: 'throttle' | 'debounce';
    delayTime?: number;
    threshold?: number;
  }

  export class LazyLoadImage extends React.Component<LazyLoadImageProps> {}
}
