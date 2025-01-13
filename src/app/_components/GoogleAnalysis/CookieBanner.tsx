"use client";

import { getLocalStorage, setLocalStorage } from "~/lib/storageHelper";
import { useState, useEffect } from "react";
import Button from "../buttons/button";
import { ButtonVariant } from "~/types/props";

import {
  Dialog,
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../modals/linearCard";
import { LiaCookieSolid } from "react-icons/lia";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(false);
  const [open, setOpen] = useState<boolean>();

  useEffect(() => {
    console.log("open", open);
  }, [open]);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage<boolean | null>(
      "cookie_consent",
      null,
    );

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    console.log("Cookie Consent: ", cookieConsent);
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);

    //For Testing
    console.log("Cookie Consent: ", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`${cookieConsent != null ? "hidden" : "flex"} ${open ? "w-0 p-0" : "w-fit p-4 px-10"} fixed bottom-6 left-10 z-[999] flex-row items-center gap-5 rounded-full bg-primary-750`}
    >
      <Dialog>
        <DialogTrigger
          style={{ borderRadius: "12px" }}
          className="flex w-full flex-col overflow-hidden"
          setIsPopupOpen={(isOpen) => {
            setOpen(isOpen);
          }}
        >
          {/* <div className="flex flex-grow flex-row items-end justify-between p-3">
          <div>
            <DialogTitle className="text-xl text-zinc-950 dark:text-zinc-50">
              Cookies
            </DialogTitle>
          </div>
        </div> */}
          {/* make the icon has no background */}
          <LiaCookieSolid size={50} className="bg-transparent" />
        </DialogTrigger>

        <DialogContainer className="w-fit pt-20">
          <DialogContent>
            <div
              className={`fixed bottom-6 left-1/2 z-[999] max-w-[500] w-4/5 -translate-x-1/2 flex-row items-center gap-5 rounded-2xl bg-primary-750 p-4 px-10`}
            >
              <DialogTitle className="text-center">Cookis</DialogTitle>
              <DialogDescription className="max-w-fit p-5 text-center flex flex-col gap-4">
              <div>
                <p>
                  At <strong>Dragons</strong>, we value your
                  privacy and strive to enhance your experience on our website.
                  This Cookie Policy outlines our use of cookies and similar
                  technologies to improve functionality, personalize content,
                  and analyze site traffic.
                </p>
                <p className="text-sm">
                  By using our site, you consent to our use of cookies. For more
                  details, please refer to our full Cookie Policy.
                </p>
                </div>
                <div className="flex items-center justify-around gap-2">
                  <Button
                    variant={ButtonVariant.Secondary}
                    onClick={() => setCookieConsent(false)}
                  >
                    Decline
                  </Button>
                  <Button
                    className={ButtonVariant.Primary}
                    onClick={() => setCookieConsent(true)}
                  >
                    Allow Cookies
                  </Button>
                </div>
              </DialogDescription>

              <DialogClose
                size={15}
                className="rounded-full bg-gray-400 p-2 text-zinc-50 hover:bg-gray-500 dark:bg-gray-900 dark:hover:bg-gray-800"
              />
            </div>
          </DialogContent>
        </DialogContainer>
      </Dialog>
    </div>
  );
}
