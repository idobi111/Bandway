import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppBar, Toolbar, Typography, Button, CssBaseline } from '@mui/material';
import Header from './components/Header'
import HomeTopContent from './components/HomeTopContent'

function App() {

  return (
    <>
    <CssBaseline/>
    <Header></Header>
    <HomeTopContent></HomeTopContent>
    
  </>
  )
}

export default App