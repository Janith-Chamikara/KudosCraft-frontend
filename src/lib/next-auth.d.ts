import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      email: 'string';
      bio: object;
      firstName: 'string';
      lastName: 'string';
      subscriptionPlan: 'string';
      role: 'string';
      createdAt: string;
      updatedat: string;
    };
    tokenInfo: {
      accessToken: string;
      refreshToken: string;
      accessTokenExpiresIn: number;
      refreshTokenExpiresIn: number;
    };
  }
}

import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      id: number;
      email: 'string';
      bio: object;
      firstName: 'string';
      lastName: 'string';
      subscriptionPlan: 'string';
      role: 'string';
      createdAt: string;
      updatedat: string;
    };
    tokenInfo: {
      accessToken: string;
      refreshToken: string;
      accessTokenExpiresIn: number;
      refreshTokenExpiresIn: number;
    };
  }
}
