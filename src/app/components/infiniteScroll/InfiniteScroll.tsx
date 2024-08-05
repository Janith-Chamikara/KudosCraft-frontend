import Testimonial from '../Testimonial';
import './infiniteScroll.css';
import { testimonials } from './testimonials';
export default function InfiniteScroll() {
  const midIndex = Math.floor(testimonials.length / 2);
  return (
    <>
      <div className="wrapper w-full">
        {testimonials.slice(0, midIndex).map((testimonial, index) => {
          const delay = (60 / midIndex) * (midIndex - (index + 1)) * -1;
          return (
            <div
              key={index}
              className={`itemLeft`}
              style={{
                animationDelay: `${delay}s`,
              }}
            >
              <Testimonial
                name={testimonial.name}
                profileImg={testimonial.profileImg}
                ratings={testimonial.ratings}
                title={testimonial.title}
                review={testimonial.review}
              />
            </div>
          );
        })}
      </div>
      <div className="wrapper">
        {testimonials
          .slice(midIndex, testimonials.length)
          .map((testimonial, index) => {
            const delay =
              (60 / (testimonials.length - midIndex)) *
              (midIndex - (index + 1)) *
              -1;
            return (
              <div
                key={index}
                className={`itemRight`}
                style={{
                  animationDelay: `${delay}s`,
                }}
              >
                <Testimonial
                  name={testimonial.name}
                  profileImg={testimonial.profileImg}
                  ratings={testimonial.ratings}
                  title={testimonial.title}
                  review={testimonial.review}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}
