import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GroupProvider } from './components/groupcreate/GroupContext';
import { MemoryProvider } from './pages/memoryupload/MemoryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GroupProvider>
    <MemoryProvider>
      <App />
    </MemoryProvider>
  </GroupProvider>,
);
