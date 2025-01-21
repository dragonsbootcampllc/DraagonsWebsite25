"use client";
import { useEffect } from "react";
import Intercom from "@intercom/messenger-js-sdk";

export default function IntercomeChat() {
  useEffect(() => {
    const appId = process.env.NEXT_PUBLIC_INTERCOM_APP_ID;

    if (appId) {
      Intercom({
        app_id: appId,
      });
    } else {
      console.error("Intercom app_id is missing from the environment variables.");
    }
  }, []);

  return null;
}
