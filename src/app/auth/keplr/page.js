"use client";

import React, { useState, useEffect, useCallback } from "react";
import ErrorAlert from "@/components/Alert/Error";
import PageTitle from "@/components/Title";
import { useRouter } from "next/navigation";
import Keplr from "@/utils/Keplr";
import Image from "next/image";

function KeplrPage() {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleClickPreviousPage = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleClickKeplr = useCallback(async () => {
    try {
      const keplrData = await Keplr();
      sessionStorage.setItem("walletSigner", JSON.stringify(keplrData));
      router.push("/");
    } catch (error) {
      setError(error);
    }
  }, [router]);

  useEffect(() => {
    const handleKeystoreChange = () => {
      handleClickKeplr();
    };

    if (typeof window !== "undefined") {
      window.addEventListener("keplr_keystorechange", handleKeystoreChange);
      return () => {
        window.removeEventListener("keplr_keystorechange", handleKeystoreChange);
      };
    }
  }, [handleClickKeplr]);

  return (
    <div className="container">
      <PageTitle title="Keplr Wallet" />
      <div className="d-grid gap-5">
        <button
          type="button"
          className="btn bg-light-green mw-25 rounded-5 mx-auto my-5 p-4"
          onClick={handleClickKeplr}
        >
          <Image
            className="m-3"
            src="/images/Keplr.svg"
            alt="Keplr"
            height="122"
            width="163"
            priority
          />
          <p className="m-auto w-75 bg-purple text-dark rounded h6 py-2">Connect</p>
        </button>
        <a
          className="d-flex w-25 text-start text-decoration-none text-dark"
          href="#"
          onClick={handleClickPreviousPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi my-auto bi-caret-left-fill"
            viewBox="0 0 16 16"
          >
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
          <p className="my-auto">Back</p>
        </a>
      </div>
      {error && <ErrorAlert error={error} />}
    </div>
  );
}

export default KeplrPage;