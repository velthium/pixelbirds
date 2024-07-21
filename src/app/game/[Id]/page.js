"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import Title from "@/components/Title";
import dynamic from "next/dynamic";
import ErrorAlert from "@/components/Alert/Error";
import Loading from "@/components/Loading";

const DynamicPhaserGame = dynamic(() => import("@/components/game/PhaserGame"), { ssr: false });

const COLLECTION_ADDRESS = "stars1d5frtu2txpy2c5v9jg60wqju2qk8cm8xg3k7s4k863m4hg9mt70sxlxtq2";

const GamePage = () => {
  const [userWalletAddress, setUserWalletAddress] = useState(null);
  const [nfts, setNfts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams();
  const { Id } = params;

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

      const hasNFT = tokens.some(token => token.tokenId === Id);

      if (!hasNFT) {
        router.push("/no-access");
      } else {
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [userWalletAddress, Id, router]);

  useEffect(() => {
    if (userWalletAddress) {
      fetchData();
    }
  }, [fetchData, userWalletAddress]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorAlert error={error} />;
  }

  return (
    <div className="container text-center py-5">
      <Title title={`Game ID: ${Id}`} />
      <DynamicPhaserGame gameId={Id} />
    </div>
  );
};

export default GamePage;
