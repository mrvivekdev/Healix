import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {AppProvider} from './utils/GenrealContext.tsx'

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>  
  </AppProvider>
)
