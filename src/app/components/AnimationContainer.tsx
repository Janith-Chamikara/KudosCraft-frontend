import LottiePlayer from './LazyLottie';

export default function AnimationContainer({ src }: { src: string }) {
  return (
    <div className="w-full flex justify-between items-center">
      <LottiePlayer src={src} className="w-[300px] h-[300px]" />
    </div>
  );
}
