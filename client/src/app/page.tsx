'use client';

import { useEffect, useState } from 'react';
import { Dino } from './types.ts';
import Link from 'next/link';
import React from 'react';
import './globals.css';
export default function Home() {
  const [dinosaurs, setDinosaurs] = useState<Dino[]>([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/dinosaurs`);
      const allDinosaurs = (await response.json()) as Dino[];
      setDinosaurs(allDinosaurs);
    })();
  }, []);

  return (
    <div className={''}>
      <h1>Welcome to the Dinosaur app</h1>
      <p>Click on a dinosaur below to learn more.</p>
      <div className="flex flex-col">
        {dinosaurs.map((dinosaur: Dino) => {
          return (
            <Link key={dinosaur.name} href={`/${dinosaur.name.toLowerCase()}`}>
              {dinosaur.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
