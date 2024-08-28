import { loginAction, refreshAccessToken } from '@/lib/actions';
import { User } from '@/lib/types';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';

async function refreshTokenHandler(
  refreshToken: string,
  token: JWT,
): Promise<JWT> {
  const response = await refreshAccessToken(refreshToken);
  if (response?.status === 'success') {
    return { ...token, ...response.data };
  }
  return token;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Email and Password',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;
        const response = await loginAction({ email, password });
        if (response?.status === 'error') {
          return null;
        }

        const user = response?.data as User;
        return user as User;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      const expiresIn = new Date(
        token.accessTokenExpiresIn as string,
      ).getTime();
      const currentTime = new Date().getTime();
      if (currentTime < expiresIn) return token;
      return await refreshTokenHandler(token.refreshToken as string, token);
    },

    async session({ token, session }) {
      const accessToken = token.accessToken;
      const refreshToken = token.refreshToken;
      session.user.id = token.id as string;
      session.user.email = token.email as string;
      session.user.name = `${token.firstName} ${token.lastName}`;
      session.user.isActive = token.isActive as boolean;
      session.user.verified = token.verified as boolean;
      session.user.roleId = token.roleId as string;
      session.user.customerId = token.customerId as string;
      session.user.otherNames = token.otherNames as string;
      session.user.accessToken = accessToken as string;
      session.user.refreshToken = refreshToken as string;
      session.user.refreshTokenExpiresIn =
        token.refreshTokenExpiresIn as string;
      session.user.accessTokenExpiresIn = token.accessTokenExpiresIn as string;
      return session;
    },
  },
  pages: {
    signIn: '/sign-in',
  },
};
