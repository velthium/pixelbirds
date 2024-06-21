"use client";

import React, { useCallback } from "react";
import PageTitle from "@/components/Title";
import Image from "next/image";
import Link from "next/link";

const WalletButton = ({ href, src, alt, text }) => {
  return (
    <Link href={href} className="nav-link">
      <button
        type="button"
        className="btn bg-white border shadow-sm mw-25 mx-auto d-flex align-items-center m-5"
      >
        <Image src={src} alt={alt} width="50" height="50" />
        <p className="fw-semibold fs-4 my-auto ms-3">{text}</p>
      </button>
    </Link>
  );
};

export default function Auth() {
  return (
    <div className="container">
      <PageTitle title="Connect your Wallet" />
      <WalletButton href="/auth/keplr" src="/images/Keplr.svg" alt="Keplr" text="Keplr Wallet" />
      <WalletButton href="/auth/leap" src="/images/Leap.svg" alt="Leap" text="Leap Wallet" />
    </div>
  );
}