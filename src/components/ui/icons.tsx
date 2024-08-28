import React from 'react';

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  Logo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="300"
      viewBox="0 0 375 375"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path d="M78 183h51.941v9H78Zm0 0" />
        </clipPath>
        <clipPath id="b">
          <path d="M88 163h41.941v9H88Zm0 0" />
        </clipPath>
        <clipPath id="c">
          <path d="M109 173h20.941v9H109Zm0 0" />
        </clipPath>
        <clipPath id="d">
          <path d="M65.441 183H75v9h-9.559Zm0 0" />
        </clipPath>
        <clipPath id="e">
          <path d="M90 193h39.941v9H90Zm0 0" />
        </clipPath>
        <clipPath id="f">
          <path d="M94 202h35.941v9H94Zm0 0" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path
          className="logo-fill"
          d="M152.207 183.402h-41.516l-1.773 3.067h-4.102l-1.773-3.067H80.832l-2.293 3.973 2.293 3.973h22.211l1.773-3.067h4.102l1.773 3.067h41.516a23.192 23.192 0 0 0 0-7.946Zm0 0"
        />
      </g>
      <g clipPath="url(#b)">
        <path
          className="logo-fill"
          d="m95.21 171.82 1.774-3.062h4.102l1.773 3.062h43.77c-8.227-9.273-17.453-7.949-28.578-7.949h-15.192l-1.773 3.066h-4.102l-1.773-3.066h-4.586l-2.293 3.973 2.293 3.969h4.586Zm0 0"
        />
      </g>
      <g clipPath="url(#c)">
        <path
          className="logo-fill"
          d="M122.629 176.707h-4.106l-1.773-3.066h-4.586l-2.293 3.972 2.293 3.973h4.586l1.773-3.066h4.106l1.773 3.066h27.418a23.4 23.4 0 0 0-3.734-7.953h-23.684Zm0 0"
        />
      </g>
      <g clipPath="url(#d)">
        <path
          className="logo-fill"
          d="m67.734 183.402-2.293 3.973 2.293 3.98h4.594l2.293-3.98-2.293-3.973Zm0 0"
        />
      </g>
      <path
        className="logo-fill"
        d="m96.777 177.613 2.293 3.973h4.594l2.293-3.973-2.293-3.972H99.07ZM83.406 202.93l-2.3 3.976 2.3 3.973h4.586l2.293-3.973-2.293-3.976Zm0 0"
      />
      <g clipPath="url(#e)">
        <path
          className="logo-fill"
          d="M103.043 196.23h-4.106l-1.773-3.062h-4.586l-2.293 3.969 2.293 3.972h4.586l1.773-3.066h4.106l1.773 3.066h43.262a23.415 23.415 0 0 0 3.734-7.949H104.81Zm0 0"
        />
      </g>
      <g clipPath="url(#f)">
        <path
          className="logo-fill"
          d="M114.797 206h-4.106l-1.773-3.063H96.496l-2.293 3.97 2.293 3.972h12.422l1.773-3.066h4.106l1.773 3.066c11.746 0 21.621 1.566 30.059-7.95H116.57Zm0 0"
        />
      </g>
      <path
        className="logo-fill"
        d="M163.036 189.592h-5.047v-19.625h5.047v7.703h2.516l4.375-7.703h5.328l-5.484 9.672 5.468 9.953h-5.328l-4.36-8h-2.515ZM195.171 169.967h5.063v14.297c0 1.96-.45 3.386-1.344 4.28-.887.888-2.309 1.329-4.266 1.329h-6.453c-1.969 0-3.398-.441-4.281-1.328-.887-.895-1.328-2.32-1.328-4.281v-14.297h5.047v14.297c0 1.125.554 1.687 1.672 1.687h4.218c1.114 0 1.672-.562 1.672-1.687ZM220.148 169.967c2.113 0 3.718.547 4.812 1.64 1.094 1.094 1.64 2.696 1.64 4.797v6.735c0 2.117-.546 3.718-1.64 4.812-1.094 1.094-2.7 1.64-4.812 1.64H209.21v-19.624Zm1.39 6.437c0-1.675-.84-2.515-2.515-2.515h-4.766v11.78h4.766c1.675 0 2.515-.843 2.515-2.53ZM247.626 175.295c0-1.125-.558-1.688-1.672-1.688h-4.765c-1.125 0-1.688.563-1.688 1.688v8.969c0 1.125.563 1.687 1.688 1.687h4.765c1.114 0 1.672-.562 1.672-1.687Zm5.063 8.969c0 1.96-.45 3.386-1.344 4.28-.887.888-2.309 1.329-4.266 1.329h-7.015c-1.969 0-3.399-.441-4.282-1.328-.886-.895-1.328-2.32-1.328-4.281v-8.97c0-1.968.442-3.394 1.328-4.28.883-.883 2.313-1.328 4.282-1.328h7.015c1.957 0 3.38.445 4.266 1.328.894.886 1.344 2.312 1.344 4.28ZM260.51 185.53c5.125.28 8.594.421 10.407.421.425 0 .765-.125 1.015-.375.258-.258.39-.601.39-1.031v-2.531h-6.452c-1.969 0-3.399-.442-4.282-1.328-.886-.883-1.328-2.313-1.328-4.282v-.828c0-1.969.442-3.394 1.328-4.281.883-.883 2.313-1.328 4.282-1.328h9.843v3.922h-8.718c-1.125 0-1.688.562-1.688 1.687v.547c0 1.125.563 1.688 1.688 1.688h5.047c1.832 0 3.175.433 4.03 1.296.864.856 1.298 2.2 1.298 4.032v1.406c0 1.836-.434 3.184-1.297 4.047-.856.855-2.2 1.281-4.031 1.281-.961 0-1.97-.023-3.032-.062l-2.578-.11a179.705 179.705 0 0 1-5.922-.39ZM189.971 207.035c-1.887.164-3.453.25-4.703.25-.836 0-1.445-.191-1.828-.578-.387-.394-.578-1.008-.578-1.843V200.8c0-.883.195-1.531.593-1.937.407-.407 1.051-.61 1.938-.61h4.578v1.781h-4.062c-.512 0-.766.258-.766.766v4.063c0 .199.055.355.172.468a.577.577 0 0 0 .437.172h.578c.22-.008.442-.015.672-.015.227-.008.457-.02.688-.032.238-.008.539-.023.906-.047.363-.03.82-.062 1.375-.093ZM197.97 198.254h5.345c.882 0 1.53.203 1.937.61.406.406.61 1.054.61 1.937v1.14c0 .712-.122 1.262-.36 1.657-.23.387-.602.64-1.11.766l1.594 2.796h-2.484l-1.469-2.671h-1.781v2.671h-2.281Zm5.595 2.547c0-.508-.258-.766-.766-.766h-2.547v2.672h2.547c.508 0 .766-.254.766-.765ZM215.696 207.16h-2.485l3.375-8.906h2.532l3.375 8.906h-2.485l-.562-1.593h-3.188Zm1.14-3.25h2.032l-1.016-2.984ZM232.387 207.16h-2.281v-8.906h7.062v1.781h-4.78v2.094h3.75v1.781h-3.75ZM249.357 207.16h-2.297v-7.125h-2.672v-1.78h7.64v1.78h-2.671Zm0 0"
      />
      <path
        className="logo-stroke"
        fill="none"
        strokeLinecap="round"
        strokeWidth={2.25}
        d="M130.191 160.375v54.25"
      />
    </svg>
  ),
  ChromeIcon: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  ),
  GithubIcon: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  XIcon: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  ),
  StarIcon: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  FeatherIcon: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
      <path d="M16 8 2 22" />
      <path d="M17.5 15H9" />
    </svg>
  ),
  FilePenIcon: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  ),
  FilterIcon: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  ),
  SearchIcon: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  TrashIcon: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  ),
  MenuIcon: (props: IconProps) => (
    <svg
      {...props}
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
    >
      <path
        d="M3 5H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3 12H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3 19H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
};
