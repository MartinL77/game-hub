import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.styled"
import App from './App';
import { StyledAppWrapper } from './styles/index.styled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyledAppWrapper>
    <App />
    </StyledAppWrapper>
  </React.StrictMode>
);

