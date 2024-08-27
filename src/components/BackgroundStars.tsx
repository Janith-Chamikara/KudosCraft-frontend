import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

type StarsProps = {
  radius: number;
  count: number;
  factor: number;
  fade: boolean;
  speed: number;
};

const BackgroundStars = ({
  radius,
  count,
  factor,
  fade,
  speed,
}: StarsProps) => {
  return (
    <Canvas>
      <Stars
        radius={radius}
        count={count}
        factor={factor}
        fade={fade}
        speed={speed}
      />
    </Canvas>
  );
};

export default BackgroundStars;
