import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Components
import Header from './components/Header/Header'
import Enjoy from './components/Enjoy/Enjoy'
import Download from './components/Download/Download'
import Watch from './components/Watch/Watch'
import Kids from './components/Kids/Kids'
import Questions from './components/Questions/Questions'
import Footer from './components/Footer/Footer'

import data from './data'

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <div>
      <Header />
      <Enjoy />
      <Download />
      <Watch />
      <Kids />
      <div style={{ textAlign: 'center', overflow: 'hidden', borderBottom: '8px solid #222' }}>
        <h3 style={{ paddingTop: '3rem', background: '#000', fontSize: '3rem', color: '#fff', paddingBottom: '2rem' }}>Frequently Asked Questions</h3>
      {questions.map((question) => {
        return <Questions key={question.id} {...question} />
      })}
        <div style={{ background: '#000', color: '#fff', padding: '4rem 0' }}>
          <p style={{ fontSize: '20px' }}>Ready to watch? Enter your email to create or restart your membership.</p>
          <input style={{ padding: '1rem 2rem', width: '450px', height: '55px', border: 'none', outline: 'none' }} type="text" placeholder='Email Adress' />
          <button style={{ padding: '1rem 2rem', width: '200px', height: '55px', fontSize: '1.5rem', border: 'none', outline: 'none', position: 'relative', top: '6px', backgroundColor: "#e50914", color: "#fff", marginTop: '1rem' }} type="submit">Get Started</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
