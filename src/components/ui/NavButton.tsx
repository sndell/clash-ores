"use client";

import { useRef, useState } from "react";
import { BackgroundOverlay } from "../elements/BackgroundOverlay";
import { AnimatePresence } from "motion/react";
import { NavMenu } from "./NavMenu";
import { AccountModal } from "@/features/max-calculator";
import { sendGAEvent } from "@next/third-parties/google";

export const NavButton = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const navButtonRef = useRef<HTMLButtonElement>(null);

  const closeNavMenu = () => setIsNavMenuOpen(false);
  const openNavMenu = () => {
    sendGAEvent("event", "open_nav_menu");
    setIsNavMenuOpen(true);
    navigator.vibrate(20);
  };

  const openAccentModal = () => {
    sendGAEvent("event", "open_account_modal");
    setIsAccountModalOpen(true);
  };

  const closeAccountModal = () => {
    setIsAccountModalOpen(false);
  };

  return (
    <>
      <button
        ref={navButtonRef}
        onClick={isNavMenuOpen ? closeNavMenu : openNavMenu}
        className="grid relative place-items-center p-4 rounded-full"
      >
        <AnimatePresence>
          {isNavMenuOpen && (
            <NavMenu
              key="nav-menu"
              navButtonRef={navButtonRef}
              closeNavMenu={closeNavMenu}
              openAccountModal={openAccentModal}
            />
          )}
        </AnimatePresence>
        <BackgroundOverlay className="rounded-full border border-primary" />
        <span className="icon-[solar--hamburger-menu-outline] text-2xl" />
      </button>
      <AnimatePresence>
        {isAccountModalOpen && <AccountModal key="account-modal" close={closeAccountModal} />}
      </AnimatePresence>
    </>
  );
};
