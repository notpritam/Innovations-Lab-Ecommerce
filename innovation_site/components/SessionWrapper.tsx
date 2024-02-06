import { SessionProvider } from "next-auth/react";
import { session } from "@/lib/session";

import React from "react";

const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
  const userSession = session();
  return <SessionProvider session={userSession}>{children}</SessionProvider>;
};

export default SessionWrapper;
