"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const COLLECTION_ADDRESS = "stars1d5frtu2txpy2c5v9jg60wqju2qk8cm8xg3k7s4k863m4hg9mt70sxlxtq2";

export default function CollectionPage() {
  const [nfts, setNfts] = useState([]);
  const userWalletAddress = JSON.parse(sessionStorage.getItem("walletAddress"));

  const fetchData = useCallback(async () => {
    const query = `
      query Tokens($ownerAddrOrName: String, $collectionAddr: String) {
        tokens(ownerAddrOrName: $ownerAddrOrName, collectionAddr: $collectionAddr) {
          tokens {
            tokenId
            media {
              url
            }
          }
        }
      }
    `;

    const variables = {
      ownerAddrOrName: userWalletAddress,
      collectionAddr: COLLECTION_ADDRESS
    };

    try {
      const response = await fetch("https://graphql.mainnet.stargaze-apis.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query, variables })
      });

      const responseData = await response.json();
      const tokens = responseData.data.tokens.tokens.map(token => ({
        tokenId: token.tokenId,
        imageUrl: token.media.url
      }));
      setNfts(tokens);
    } catch (error) {
      console.error("Une erreur s'est produite lors de l'appel à l'API GraphQL.", error);
    }
  }, [userWalletAddress]);

  useEffect(() => {
    if (userWalletAddress) {
      fetchData();
    }
  }, [fetchData, userWalletAddress]);

  return (
    <div>
      <main className="container text-center py-5">
        <h1 style={{ textAlign: "center" }}>Ma Collection</h1>
        <div className="d-flex flex-wrap justify-content-around">
          {nfts.map(nft => (
            <div key={nft.tokenId} className="col-md-2 m-4 mb-5">
              <div className="thumbnail bg-light p-3 box-med-shadow rounded">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Image src={nft.imageUrl} alt={`NFT ${nft.tokenId}`} className="w-100 rounded" width={200} height={200} />
                </a>
                <div className="caption pt-3">
                  <p><strong>id :</strong> {nft.tokenId}</p>
                  <a href={`game/${nft.tokenId}`}>
                    <button type="button" className="btn btn-primary">Play</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
