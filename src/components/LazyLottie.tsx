'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const DotLottieReact = dynamic(
  () =>
    import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
  {
    ssr: false,
  },
);

type LottiePlayerProps = {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  autoplay?: boolean;
  loop?: boolean;
};

export default function LottiePlayer({
  src,
  style = {},
  className = '',
  ...rest
}: LottiePlayerProps) {
  return (
    <DotLottieReact
      autoplay
      loop
      className={className}
      src={src}
      style={style}
      {...rest}
    />
  );
}
