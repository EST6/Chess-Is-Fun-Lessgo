import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import OpeningCollection from './OpeningCollection.tsx';
import OpeningTierList from './OpeningTierList.tsx';

const rootElement = document.getElementById('root');

if(!rootElement) {
  throw new Error("No root element");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <OpeningCollection />
    <OpeningTierList />
  </React.StrictMode>
);

