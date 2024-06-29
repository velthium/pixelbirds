"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";

const DynamicPhaserGame = dynamic(() => import("@/components/PhaserGame"), { ssr: false });

const GamePage = () => {
  const params = useParams();

  return (
    <div>
      <h1>Game ID: {params.Id}</h1>
      <DynamicPhaserGame gameId={params.Id} />
    </div>
  );
};

export default GamePage;
