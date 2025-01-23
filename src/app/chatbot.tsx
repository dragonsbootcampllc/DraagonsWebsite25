"use client";

import { useEffect, useState } from "react";
import Intercom from "@intercom/messenger-js-sdk";
import { useSession } from "next-auth/react";
import { api } from "~/trpc/react";  // Updated import path

export default function IntercomChat() {
  const [mounted, setMounted] = useState(false);
  const { data: session, status } = useSession();
  const { data: hashData } = api.intercom.getHash.useQuery(
    { email: session?.user?.email ?? "" },
    { 
      enabled: !!session?.user?.email && mounted,
      retry: false
    }
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || status === 'loading') return;

    const initializeIntercom = async () => {
      const appId = process.env.NEXT_PUBLIC_INTERCOM_APP_ID;

      if (!appId) {
        console.error("Intercom app_id is missing from the environment variables.");
        return;
      }

      Intercom({
        app_id: appId,
        ...(session?.user?.email && hashData?.hash && {
          email: session.user.email,
          user_hash: hashData.hash,
        }),
      });
    };

    void initializeIntercom().catch(error => {
      console.error('Failed to initialize Intercom:', error);
    });
  }, [session, hashData, mounted, status]);

  if (!mounted) return null;
  return null;
}
