import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GroupProvider } from './components/groupcreate/GroupContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GroupProvider>
    <App />
  </GroupProvider>,
);
