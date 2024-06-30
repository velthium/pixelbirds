"use client";

const connectKeplr = async () => {
  if (typeof window !== "undefined" && window.keplr) {
    try {
      const chainId = "stargaze-3";
      await window.keplr.enable(chainId);
      const keplrSigner = window.getOfflineSigner(chainId);
      const accounts = await keplrSigner.getAccounts();
      if (accounts.length > 0) {
        let walletAddress = accounts[0].address;
        return { keplrSigner, walletAddress };
      }
    } catch (error) {
      throw new Error("An error occurred while connecting to Keplr:", error);
    }
  } else {
    throw new Error("Please install the Keplr extension.");
  }
};

export default connectKeplr;