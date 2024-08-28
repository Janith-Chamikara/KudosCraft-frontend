import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      otherNames: string;
      email: string;
      isActive: boolean;
      verified: boolean;
      roleId: string;
      customerId: string;
      accessToken: string;
      accessTokenExpiresIn: string;
      refreshToken: string;
      refreshTokenExpiresIn: string;
    };
  }
}
