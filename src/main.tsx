import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

import 'modern-normalize/modern-normalize.css';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  // eslint-disable-next-line no-console
  console.error('There is no #root element in the dom');
}
