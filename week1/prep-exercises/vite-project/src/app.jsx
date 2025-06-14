import { useState } from 'preact/hooks';
import './app.css';
import Counter from './counter.jsx';

export function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}
