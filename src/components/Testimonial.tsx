import Image from 'next/image';
import { Icons } from './ui/icons';

type TestimonialProps = {
  review: string;
  name: string;
  title: string;
  profileImg: string;
  ratings: number;
};

export default function Testimonial({
  name,
  review,
  ratings,
  title,
  profileImg,
}: TestimonialProps) {
  return (
    <div className="flex flex-col overflow-hidden border shadow-lg rounded-xl">
      <div className="flex flex-col justify-between flex-1 p-6 bg-transparent lg:py-8 lg:px-7">
        <div className="flex-1">
          <div className="flex items-center">
            {Array(ratings)
              .fill(1)
              .map((_, index) => (
                <Icons.StarIcon
                  key={index}
                  className="w-5 h-5 text-[#FDB241]"
                />
              ))}
          </div>

          <blockquote className="flex-1 mt-8">
            <p className="leading-relaxed">“{review}”</p>
          </blockquote>
        </div>

        <div className="flex items-center mt-8">
          <Image
            width={44}
            height={44}
            placeholder="blur"
            blurDataURL={`${profileImg},bl=30`}
            className="flex-shrink-0 object-cover rounded-full w-11 h-11"
            src={profileImg}
            alt=""
          />
          <div className="ml-4">
            <p className="text-base font-bold">{name}</p>
            <p className="mt-0.5 text-sm">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
