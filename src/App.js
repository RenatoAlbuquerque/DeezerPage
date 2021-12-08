import React from 'react';
import Router from './routes';
import FavProvider from './providers/favMusic';

export default function App() {
  return (
    <FavProvider>
      <Router />
    </FavProvider>
  );
}