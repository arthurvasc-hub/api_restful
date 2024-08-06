import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import BookApp from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BookApp />
    </React.StrictMode>
  );
} else {
  console.error('Elemento root não encontrado.');
}