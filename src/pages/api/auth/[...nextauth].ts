import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';


interface User {
  id: string; // Make sure id is of type string
  name: string;
  email: string;
  password: string;
}


export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const user: User = { id: '1', name: 'admin', email: 'admin@gmail.com', password: 'admin123' }; 
        if (credentials?.username === 'admin' && credentials?.password === 'admin123') {
          return Promise.resolve(user);
        }
        return Promise.resolve(null);
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET 
});
