import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTokenFromCookies = (
  cookiesArray: string[],
  tokenName: string,
) => {
  const tokenString = cookiesArray.find((cookie) =>
    cookie.startsWith(`${tokenName}=`),
  );
  if (tokenString) {
    return tokenString.split(';')[0].split('=')[1];
  }
  return null;
};

export const getTokenOptions = (
  cookiesArray: string[],
  tokenName: string,
  i: number,
) => {
  const tokenString = cookiesArray.find((cookie) =>
    cookie.startsWith(`${tokenName}=`),
  );
  if (tokenString) {
    return tokenString.split(';')[i].split('=')[1];
  }
  return null;
};
