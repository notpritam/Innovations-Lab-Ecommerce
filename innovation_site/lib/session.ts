import { User, getServerSession } from "next-auth";

export const session = async ({ session, token }: any) => {
  session.user.id = token.id;
  session.user.tenant = token.tenant;
  return session;
};

export const getSession = async () => {
  const authUserSession = await getServerSession();
  return authUserSession;
};

export const getUserSession = async (): Promise<User | null> => {
  const authUserSession = await getServerSession({
    callbacks: {
      session,
    },
  });
  if (!authUserSession) {
    console.log("No user session found!");
    return null;
  } else {
    return authUserSession.user;
  }
};
