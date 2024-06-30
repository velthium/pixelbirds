"use client";

import PropTypes from "prop-types";

function TruncatedAddress({ address }) {
    const walletAddress = sessionStorage.getItem("walletAddress");

    if (walletAddress === null) {
        return null;
    }
    const start = walletAddress.substring(0, 5);
    const end = walletAddress.substring(walletAddress.length - 4);
    return (
        <ul className="navbar-nav justify-content-start">
        <li className="nav-item">
            <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.stargaze.zone/profile/${walletAddress}/tokens`}
            className="extra-small text-cornsilk text-decoration-none">{`${start} ... ${end}`}</a>
        </li>
    </ul>
    );
}

TruncatedAddress.propTypes = {
    address: PropTypes.string.isRequired,
};

export default TruncatedAddress;
