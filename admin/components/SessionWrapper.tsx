"use client";
import { useSession, SessionProvider, getSession } from "next-auth/react";

import React from "react";

const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
  getSession().then((session) => {
    console.log(session);

    if (!session) {
      return;
    }
  });

  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;
