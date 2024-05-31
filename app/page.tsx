import dynamic from 'next/dynamic';
import Instructions from '@/components/Instructions';

const Game = dynamic(() => import('../components/Game'), { ssr: false });

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl mb-24">City Guessing Game</h1>

        <div className="flex items-center justify-center">
          <div className="mr-40">
            <Game />
          </div>
          <div>
            <Instructions />
          </div>
        </div>
      </main>
    </>
  );
}
