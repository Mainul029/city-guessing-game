'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { LatLng } from 'leaflet';
import { calculateDistance } from '@/utils/calculateDistance';
import citiesData from '@/data/cities.json';
import { City } from '@/interfaces/city';
import {
  CORRECT_GUESS_BOUNDARY_IN_KM,
  STARTING_LOCATION_INDEX,
  STARTING_SCORE_IN_KM,
} from '@/constants/game';

const Map = dynamic(() => import('./Map'), { ssr: false });

const Game = () => {
  const cities: City[] = citiesData.cities;
  const [currentCityIndex, setCurrentCityIndex] = useState(
    STARTING_LOCATION_INDEX
  );
  const [score, setScore] = useState(STARTING_SCORE_IN_KM);
  const [identifiedCity, setIdentifiedCity] = useState(0);
  const [message, setMessage] = useState<string | null>(null);

  const currentCity = cities[currentCityIndex];

  const handlePinDrop = (latlng: LatLng) => {
    if (!currentCity) return;

    const distance = calculateDistance(
      latlng.lat,
      latlng.lng,
      currentCity.position.lat,
      currentCity.position.lng
    );
    if (distance <= CORRECT_GUESS_BOUNDARY_IN_KM) {
      setIdentifiedCity((prevState) => prevState + 1);
      setMessage(`Correct! The city was ${currentCity.name}.`);
    } else {
      setMessage(
        `The city was ${currentCity.name}. You were ${distance.toFixed(
          2
        )} km away.`
      );
    }
    setScore(score - distance);
    if (score - distance <= 0) {
      setMessage('Game Over!');
    } else {
      setCurrentCityIndex((currentCityIndex + 1) % cities.length);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-4">
        Find the City: {currentCity?.name}
      </h1>
      <Map city={currentCity} onPinDrop={handlePinDrop} />
      <h2 className="text-2xl mt-4">Score: {score.toFixed(2)} km</h2>
      <h2 className="text-2xl mt-4">
        Correctly Identified City: {identifiedCity}
      </h2>
      {message && <p className="mt-2 text-lg">{message}</p>}
    </div>
  );
};

export default Game;
