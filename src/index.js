import React from 'react';
import ReactDOM from 'react-dom'; // Correct import
import './index.css';
import Card from './Card';
import 'tachyons';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root'); // Get the root element

ReactDOM.createRoot(root).render(<Card />); // Render the app
