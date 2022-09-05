import React from "react";
import { createRoot } from 'react-dom/client'

import { ContextProvider } from "./contexts/ContextPorvider";

import './index.css';
import App from './App';


createRoot(document.getElementById('root')).render(
<ContextProvider>
    <App />
</ContextProvider>

)