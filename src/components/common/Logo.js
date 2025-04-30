import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-bold flex items-center gap-2 text-(--color-primary) dark:text-(--color-dark-primary)"
    >
      <Image src={"/images/icon.png"} alt="logo-icon" width={50} height={50} />
      TalentHive
    </Link>
  );
};

export default Logo;
