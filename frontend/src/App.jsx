import { SnackbarProvider } from 'notistack';
import React from 'react';
import Auth from './components/Auth';
import Router from './components/Router/Router';

function App() {
  return (
    <Auth>
      <SnackbarProvider>
        <Router />
      </SnackbarProvider>
    </Auth>
  );
}

export default App;
