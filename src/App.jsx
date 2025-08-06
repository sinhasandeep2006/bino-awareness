import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Meet Bino</h1>
        <p>WhatsApp‑based AI search assistant. Find anything, anywhere—instantly.</p>
        <a
          href="https://wa.me/919800081110?text=Hi%20Bino,%20tell%20me%20about%20your%20service"
          target="_blank"
          rel="noopener noreferrer"
          className="btn">
          Chat with Bino on WhatsApp
        </a>
      </header>
      <section className="demo-chat">
        <h2>How it works (demo):</h2>
        <div className="chat-window">
          <div className="message user">“Hotels near Koramangala, under ₹2000”</div>
          <div className="message bot">  
            Bino finds 3 hotels:<br />
            1. Budget Stay — ₹1800/night<br />
            2. Cozy Inn — ₹1750/night<br />
            3. Student Lodge — ₹1600/night
          </div>
          <div className="message user">“Book Student Lodge”</div>
          <div className="message bot">Great, you’re booked! Confirmation sent.</div>
        </div>
      </section>
      <footer>
        <p>Powered by Bino – AI & WhatsApp • Bengaluru</p>
      </footer>
    </div>
  );
}

export default App;
