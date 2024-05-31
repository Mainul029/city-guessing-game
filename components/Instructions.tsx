import {
  CORRECT_GUESS_BOUNDARY_IN_KM,
  STARTING_SCORE_IN_KM,
} from '@/constants/game';
import React from 'react';

const Instructions = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">How to Play</h2>
      <p className="mb-2">
        Welcome to the City Guessing Game! Your mission is to find the correct
        location of the given city on the map.
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li className="mb-2">
          You will see the name of a city at the top of the right map screen.
        </li>
        <li className="mb-2">
          Click on the map to place your needle pin where you think the city is
          located.
        </li>
        <li className="mb-2">
          After placing the pin, the game will show you the actual location of
          the city and the distance in kilometers between your pin and the city.
        </li>
        <li className="mb-2">
          If your pin is within {CORRECT_GUESS_BOUNDARY_IN_KM}km of the city,
          your guess will be considered correct.
        </li>
        <li className="mb-2">
          You start with a score of {STARTING_SCORE_IN_KM} kilometers.
        </li>
        <li className="mb-2">
          Each round, the distance between your pin and the actual city location
          will be subtracted from your score.
        </li>
        <li className="mb-2">
          The game ends when your score reaches 0 kilometers.
        </li>
        <li className="mb-2">
          Your high score is the number of cities you correctly identified.
        </li>
      </ol>
      <p className="font-bold">Good luck and have fun!</p>
    </div>
  );
};

export default Instructions;
