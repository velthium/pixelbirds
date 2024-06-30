"use client";

const connectKeplr = async () => {
  if (typeof window !== "undefined" && window.keplr) {
    try {
      const chainId = "stargaze-3";
      await window.keplr.enable(chainId);
      const keplr = window.getOfflineSigner(chainId);
      const accounts = await keplr.getAccounts();
      if (accounts.length > 0) {
        sessionStorage.setItem("walletAddress", accounts[0].address);
        return accounts[0].address;
      }
    } catch (error) {
      throw new Error("An error occurred while connecting to Keplr:", error);
    }
  } else {
    throw new Error("Please install the Keplr extension.");
  }
};

export default connectKeplr;

