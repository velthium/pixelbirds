"use client";

import TruncatedAddress from "@/components/TruncatedAddress";
import { useAuth } from "@/contexts/Auth";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const { walletAddress, setWalletAddress } = useAuth();
    const [walletSigner, setWalletSigner] = useState(null);

    function handleLogoutClick() {
        sessionStorage.clear();
        setWalletAddress(false);
        setWalletSigner(null);
    }

    useEffect(() => {
        const walletSigner = sessionStorage.getItem("walletSigner");
        const walletAddress = sessionStorage.getItem("walletAddress");

        if (walletAddress) {
            setWalletSigner(walletSigner);
            setWalletAddress(walletAddress);
        }
    }, [walletAddress]);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
                <Link className="navbar-brand text-cornsilk" href="/">Pixel Birds</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                {walletSigner && (
                    <TruncatedAddress />
                )}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item mx-2">
                            <Link className="nav-link" href="/#roadmap">Roadmap</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" href="/#theteam">The Team</Link>
                        </li>
                        {walletSigner && (
                        <li className="nav-item mx-2">
                            <Link className="nav-link" href="/collection">Collection</Link>
                        </li>
                        )}
                       {walletAddress ? (
                            <li className="nav-item mx-2">
                                <button type="button" className="button nav-link" id="login-link" onClick={handleLogoutClick}>Logout</button>
                            </li>
                        ) : (
                            <li className="nav-item mx-2">
                                <Link className="nav-link" href="/auth">Login</Link>
                            </li>
                        )}
                        <li className="nav-item mx-2">
                            <a className="nav-link" target="_blank" rel="noreferrer" href="https://twitter.com/nft_pixel_birds">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" target="_blank" rel="noreferrer" href="https://discord.gg/kDpTkPShEb">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
