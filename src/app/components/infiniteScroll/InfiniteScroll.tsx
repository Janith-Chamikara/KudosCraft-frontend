'use client';
import './infiniteScroll.css';

const arr = Array(16).fill(0);
export default function InfiniteScroll() {
  return (
    <>
      <div className="wrapper">
        {arr.slice(0, arr.length / 2).map((item, index) => {
          return (
            <div
              key={index}
              className={`itemLeft`}
              style={{
                animationDelay: `calc(30s / 8 * (8 - (${index}+1)) * -1)`,
              }}
            ></div>
          );
        })}
      </div>
      <div className="wrapper">
        {arr.slice(arr.length / 2, arr.length).map((item, index) => (
          <div key={index} className={`itemRight item${index + 1}`}></div>
        ))}
      </div>
    </>
  );
}
