"use client";

import { useParams } from "next/navigation";
import Title from "@/components/Title";
import dynamic from "next/dynamic";

const DynamicPhaserGame = dynamic(() => import("@/components/PhaserGame"), { ssr: false });

const GamePage = () => {
  const params = useParams();

  return (
    <div className="container text-center py-5">
      <Title title={`Game ID: ${params.Id}`} />
      <DynamicPhaserGame gameId={params.Id} />
    </div>
  );
};

export default GamePage;
