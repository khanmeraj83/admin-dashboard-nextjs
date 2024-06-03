import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface Credentials {
  username: string;
  password: string;
}

interface User {
  id: string; // Make sure id is of type string
  name: string;
  email: string;
  password: string;
}

interface Token {
  id: string; // Make sure id is of type string
}

interface Session {
  user: {
    id: string; // Make sure id is of type string
  };
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: Credentials) {
        const user: User = { id: '1', name: 'admin', email: 'admin@gmail.com', password: 'admin123' }; // Ensure id is of type string
        if (credentials?.username === 'admin' && credentials?.password === 'admin123') {
          return Promise.resolve(user);
        }
        return Promise.resolve(null);
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: { token: Token; user?: User }) {
      if (user) {
        token.id = user.id;
      }
      return Promise.resolve(token);
    },
    async session({ session, token }: { session: Session; token: Token }) {
      if (token) {
        session.user.id = token.id;
      }
      return Promise.resolve(session);
    },
  },
});
