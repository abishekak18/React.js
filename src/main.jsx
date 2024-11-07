import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Message from './export_learn.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Message />
  </StrictMode>,
);
