import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initPromise } from './config/i18n'

function AppWrapper() {
  const [isI18nReady, setIsI18nReady] = useState(false);

  useEffect(() => {
    initPromise.then(() => {
      setIsI18nReady(true);
    });
  }, []);

  if (!isI18nReady) {
    return <div className="min-h-screen bg-[#F5F1E8] dark:bg-[#0A0A0A]" />;
  }

  return <App />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)
