import loginUser from "@/app/actions/auth/loginUser";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import dbConnect, { collectionNamesObj } from "./dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@xxx.com" },
        username: {
          label: "Username",
          type: "text",
          placeholder: "Jasim Smith",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await loginUser(credentials);
        if (res && res.success && res.data) return res.data;
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'select_account'
        }
      }
    }),
    GitHubProvider({
      clientId: process.env.Github_Client_ID,
      clientSecret: process.env.Github_Client_Secret,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account && account.provider !== "credentials") {
        try {
          const { providerAccountId, provider } = account;
          const { email, name, image } = user;
          const userCollection = dbConnect(collectionNamesObj.userCollection);
          const isExist = await userCollection.findOne({
            $or: [{ providerAccountId }, { email }],
          });
          if (!isExist) {
            const newUser = {
              name,
              email,
              image: image || null,
              provider,
              providerAccountId,
              role: "user",
              createdAt: new Date(),
            };
            await userCollection.insertOne(newUser);
          }
        } catch (err) {
          console.error("MongoDB Insertion Error in Social Login:", err);
          return false;
        }
      }
      return true;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

/* {
  user: {
    _id: '6aa40e8ac572f171f87d2996',
    name: 'Kamal',
    email: 'test@gmail.com',
    role: 'user',
    createdAt: '2026-09-11T14:22:02.877Z'
  },
  profile: undefined,
  email: undefined,
  credentials: {
    email: 'test@gmail.com',
    password: "Hashed"
    callbackUrl: '/',
    redirect: 'false',
    csrfToken: '8e6cba4755ae22b91a7211e9072c61770cb76c7c090603c345ced67490e54bbe',
    json: 'true'
  },
  account: {
    providerAccountId: undefined,
    type: 'credentials',
    provider: 'credentials'
  }
}

 */
