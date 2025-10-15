import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { SiteDataProvider } from './contexts/SiteDataContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SiteDataProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </SiteDataProvider>
    </ThemeProvider>
  </React.StrictMode>
);