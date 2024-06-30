"use client";

import Counter from "@/components/Counter";
import Phase from "@/components/Phase";
import Title from "@/components/Title";
import Image from "next/image";

export default function HomePage() {
  const phases = [
    { title: "Phase 1", description: "Creation of the NFT collection.", completed: true },
    { title: "Phase 2", description: "Creation of the website.", completed: true },
    { title: "Phase 3", description: "Creation of the Pixel Birds Discord.", completed: true },
    { title: "Phase 4", description: "Improvement of the website.", completed: true },
    { title: "Phase 5", description: "Creation of the video game. [In progress]", completed: false },
  ];

  return (
    <div className="container text-center py-5">
      <Title title="Pixel Birds" />
      <h2 className="my-5">
        Pixel Birds is a collection [based on Stargaze] of 5202 adorable pixelated NFT birds, each with its own characteristic.
      </h2>
      <Counter />
      <p className="my-5">
        Pixel Birds is on the Stargaze blockchain, renowned for its negligible energy consumption and virtually zero gas fees.
      </p>
      <div className="d-flex flex-column flex-sm-row justify-content-around bg-sunshine rounded">
        <figure className="figure">
          <a
            className="text-decoration-none"
            target="_blank"
            rel="noreferrer"
            href="https://www.stargaze.zone/launchpad/stars1nc5rsfwnnlf4r7xjnh5agr8mk82q0m5n0drcmd6f0977ygh2ld7svz2xl4"
          >
            <figcaption className="figure-caption p-2">Mint Page</figcaption>
            <Image
              src="/images/Mint.png"
              width={300}
              height={300}
              alt="Mint Page"
              className="img-fluid border rounded shadow homepage-pictures"
              priority={true}
            />
          </a>
        </figure>
        <figure className="figure">
          <a
            className="text-decoration-none"
            target="_blank"
            rel="noreferrer"
            href="https://www.stargaze.zone/marketplace/stars1d5frtu2txpy2c5v9jg60wqju2qk8cm8xg3k7s4k863m4hg9mt70sxlxtq2?sort=price_asc"
          >
            <figcaption className="figure-caption p-2">Marketplace</figcaption>
            <Image
              src="/images/Marketplace.png"
              width={300}
              height={300}
              alt="Marketplace"
              className="img-fluid border rounded shadow homepage-pictures"
              priority={true}
            />
          </a>
        </figure>
      </div>
      <h2 className="mt-5" id="roadmap">Roadmap</h2>
      <div className="container text-start">
        <div className="main-timeline">
          {phases.map((phase, index) => (
            <Phase key={index} phase={index + 1} title={phase.title} description={phase.description} completed={phase.completed} />
          ))}
        </div>
      </div>
      <h2 className="mt-5 pb-3" id="theteam">The Team</h2>
      <div className="card bg-warning m-md-5 p-md-5 py-3">
        <h3>Velthium</h3>
        <p>So far it is just me. Creator of the nft pixel birds. Web Developer.</p>
        <Image
          src="/images/Velthium.jpg"
          width={300}
          height={300}
          alt="Velthium"
          className="img-fluid mx-auto border rounded shadow homepage-pictures"
          priority={true}
        />
      </div>
    </div>
  );
}
