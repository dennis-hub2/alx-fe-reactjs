import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'
import Counter from './components/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeMessage />
      <div>
        <Header />
        <MainContent />
      </div>
      <div>
        <h1>User Profile</h1>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <UserProfile name="Bob" age="30" bio="Avid reader and coffee enthusiast" />
        <UserProfile name="Charlie" age="28" bio="Enjoys painting and playing the guitar" />
      </div>
      <Counter />
      
      <Footer />
    </>
  )
}

export default App
