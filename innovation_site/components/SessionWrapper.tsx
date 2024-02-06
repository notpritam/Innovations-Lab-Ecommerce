"use client";
import { SessionProvider } from "next-auth/react";

import React from "react";

const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
  // const userSession = getSession();
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;
