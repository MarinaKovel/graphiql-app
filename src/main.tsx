import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import '@/server/firebase';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
