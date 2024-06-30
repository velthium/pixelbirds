"use client";

import { useState, useEffect, useCallback } from "react";
import ErrorAlert from "@/components/Alert/Error";
import Title from "@/components/Title";
import Image from "next/image";

const COLLECTION_ADDRESS = "stars1d5frtu2txpy2c5v9jg60wqju2qk8cm8xg3k7s4k863m4hg9mt70sxlxtq2";

export default function CollectionPage() {
  const [userWalletAddress, setUserWalletAddress] = useState(null);
  const [nfts, setNfts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const address = sessionStorage.getItem("walletAddress");
      setUserWalletAddress(address);
    }
  }, []);

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
      collectionAddr: COLLECTION_ADDRESS,
    };

    try {
      const response = await fetch("https://graphql.mainnet.stargaze-apis.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables }),
      });

      const responseData = await response.json();
      const tokens = responseData.data.tokens.tokens.map(token => ({
        tokenId: token.tokenId,
        imageUrl: token.media.url,
      }));
      setNfts(tokens);
    } catch (error) {
      setError(error);
    }
  }, [userWalletAddress]);

  useEffect(() => {
    if (userWalletAddress) {
      fetchData();
    }
  }, [fetchData, userWalletAddress]);

  return (
    <div className="container text-center py-5">
      <Title title="Ma Collection" />
      <div className="d-flex flex-wrap justify-content-around">
        {nfts.map(nft => (
          <div key={nft.tokenId} className="col-md-2 m-4 mb-5">
            <div className="thumbnail bg-sunshine p-3 box-med-shadow rounded">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image
                  src={nft.imageUrl}
                  alt={`NFT ${nft.tokenId}`}
                  className="w-100 rounded img-responsive"
                  width={200}
                  height={200}
                  priority // <-- Add this line to load the images immediately
                />
              </a>
              <div className="caption pt-3">
                <p><strong>id :</strong> {nft.tokenId}</p>
                <a href={`game/${nft.tokenId}`}>
                  <button type="button" className="btn bg-warning">Play</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {error && <ErrorAlert error={error} />}
    </div>
  );
}
