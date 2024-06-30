"use client";

// src/contexts/AuthContext.js
import { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(false);

  const value = useMemo(() => ({
    walletAddress,
    setWalletAddress,
  }), [walletAddress]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
