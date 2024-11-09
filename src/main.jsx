import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Message from './export_learn.jsx';
import Garage from './props.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Message />
    <Garage/>
  </StrictMode>,
);
