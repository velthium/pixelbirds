"use client"

import React, { useContext } from "react";

const KeplrWallet = async () => {

    if (typeof window !== "undefined" && typeof window.keplr !== "undefined") {
        try {
            const chainId = "stargaze-3";
            await window.keplr.enable(chainId);
            const keplr = window.getOfflineSigner(chainId);
            const accounts = await keplr.getAccounts();
            if (accounts && accounts.length > 0) {
                sessionStorage.setItem("walletAddress", JSON.stringify(accounts[0].address));
            }
            return keplr;
        } catch (error) {
            console.error(error);
            alert("An error occurred while connecting to Keplr.");
        }
    } else {
        console.log("Please install the Keplr extension.")
        alert("Please install the Keplr extension.");
    }
};

KeplrWallet();

export default KeplrWallet;