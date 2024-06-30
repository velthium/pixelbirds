"use client";

import { useState, useEffect } from "react";

function Counter() {
  const [currentPixelBirds, setCurrentPixelBirds] = useState(0);
  const [currentTraits, setCurrentTraits] = useState(0);

  const PixelBirds = 5202;
  const Traits = 7;

  useEffect(() => {
    const pixelBirdsInterval = setInterval(() => {
      setCurrentPixelBirds(prev => {
        if (prev < PixelBirds) {
          return prev + 35;
        }
        clearInterval(pixelBirdsInterval);
        return prev;
      });
    }, 25);

    const traitsInterval = setInterval(() => {
      setCurrentTraits(prev => {
        if (prev < Traits) {
          return prev + 1;
        }
        clearInterval(traitsInterval);
        return prev;
      });
    }, 500);

    return () => {
      clearInterval(pixelBirdsInterval);
      clearInterval(traitsInterval);
    };
  }, []);

  return (
    <div id="app" className="d-flex flex-column flex-md-row justify-content-around border p-md-2 bg-warning align-items-center rounded w-75 m-auto">
      <div className="m-2">
        <p className="h5">Pixel Birds</p>
        <p>{currentPixelBirds}</p>
      </div>
      <div className="m-2">
        <p className="h5">Traits</p>
        <p>{currentTraits}</p>
      </div>
      <div className="m-2">
        <p className="h5">Launch:</p>
        <p>19/05/2023</p>
      </div>
    </div>
  );
}

export default Counter;
