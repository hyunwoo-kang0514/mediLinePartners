import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import About from './components/About'
import Services from './components/Services'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import KakaoChat from './components/KakaoChat'

function App() {
  const [language, setLanguage] = useState('kor')

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage)
  }

  return (
    <div className="App">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <main>
        <Hero language={language} />
        <WhyUs language={language} />
        <About language={language} />
        <Services language={language} />
        <Clients language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
      <KakaoChat />
    </div>
  )
}

export default App
