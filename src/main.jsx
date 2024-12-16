import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import './index.css'; // Importa aquí el CSS de Tailwind


createRoot(document.getElementById('root')).render(
    <App />
)
