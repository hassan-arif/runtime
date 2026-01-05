"use client";

import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";

const Navbar = () => {
  const handleLogoClick = () => {
    posthog.capture("navbar_logo_clicked");
  };

  const handleNavClick = (linkName: string) => {
    posthog.capture(`navbar_${linkName}_clicked`, {
      link_name: linkName,
    });
  };

  return (
    <header>
      <nav>
        <Link href="/" className="logo" onClick={handleLogoClick}>
          <Image src="/icons/icon.png" alt="logo" width={24} height={24} />

          <p>Runtime</p>
        </Link>

        <ul>
          <Link href="/" onClick={() => handleNavClick("home")}>Home</Link>
          <Link href="/" onClick={() => handleNavClick("events")}>Events</Link>
          <Link href="/" onClick={() => handleNavClick("create_event")}>Create Event</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
