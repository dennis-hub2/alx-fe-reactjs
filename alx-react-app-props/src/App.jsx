import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <ProfilePage userData={userData} />;
      < UserContext />
      < UserProvider value={userData}>
          <ProfilePage />
      </UserProvider>
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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Footer />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
