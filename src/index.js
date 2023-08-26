import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import CardList from './CardList';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import {robots} from './robots';

const root = document.getElementById('root'); // Get the root element

ReactDOM.createRoot(root).render(<CardList robots={robots} /> ); // Render the app
