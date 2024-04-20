import { useState } from 'react';
import './App.css';
import Pricing from './component/Pricing';

function App() {

  return (
    <main className='container'>
      <div className='title'>
        <h1>Simple, traffic-based pricing</h1>
        <div><span>Sign-up for our 30-day trial.</span><span>No creadit card required.</span></div>
      </div>
      <Pricing />
    </main>
  )
}

export default App
