# City Guessing Game

Welcome to the City Guessing Game! This application allows players to find the right location of a city name on a map of Europe. The mission is to place a needle pin on the map, and the game will show you the correct location and the difference between your needle pin and the city in kilometers.

## Features

- Interactive map to place pins
- Displays the distance between the guessed location and the actual city
- Score system based on the accuracy of guesses
- Tailwind CSS for styling

## Prerequisites

- Node.js (v14 or later)
- npm or yarn

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Mainul029/city-guessing-game.git
cd city-guessing-game
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Run the Project

#### Development Mode

To run the project in development mode with hot-reloading:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 in your browser to see the application.

#### Production Mode

To build the project for production:

```bash
npm run build
# or
yarn build
```

To start the project in production mode:

```bash
npm start
# or
yarn start
```

## Project Structure

.
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── Game.tsx
│   ├── Instructions.tsx
│   └── Map.tsx
├── constants
│   ├── game.ts
│   └── map.ts
├── data
│   └── cities.json
├── interfaces
│   └── city.ts
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── project_structure.txt
├── public
│   ├── next.svg
│   └── vercel.svg
├── README.md
├── tailwind.config.ts
├── tsconfig.json
├── utils
│   ├── calculateDistance.ts
.

## Customization

### Changing the Tile Layer

To use a different tile layer for the map, update the url in the TileLayer component in Map.tsx.

### Adding More Cities

To add more cities, update the cities.json file in the data directory with additional city entries.

### Changing the Score & Game Variables

To change the score of the game and other variables related to game and map, check out the game.ts and map.ts under constants directory
