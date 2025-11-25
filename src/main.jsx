"use client";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  LiveblocksProvider,
  RoomProvider,
} from "@liveblocks/react/suspense";
import Main from './App'
import ActiveUserProvider from './Components/ContextProviderComponent/ActiveUserProvider';
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from './Components/ContextProviderComponent/ThemeProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LiveblocksProvider publicApiKey='pk_dev_uXBu6GMLLS9xOtr6v3Zyu31r6kVvIfDXlUBJmu7cu_AEKMASl2mZ-QmWFTdXbFqC'>
   <ThemeProvider>
    <ActiveUserProvider>
      <Toaster position='top center'/>
    <Main />
    </ActiveUserProvider>
   </ThemeProvider>
    </LiveblocksProvider>
  </StrictMode>,
)
