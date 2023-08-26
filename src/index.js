import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import {robots} from './robots';

const root = document.getElementById('root'); // Get the root element

ReactDOM.createRoot(root).render(
                                 <div>
                                    <Card id={robots[0].id} name={robots[0].name} email={robots[0].email } />
                                    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email } />
                                    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email } />
                                 </div>
                                ); // Render the app
