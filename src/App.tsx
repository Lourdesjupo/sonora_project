import { useState } from 'react'
import './App.css'
import mainImage from './assets/Images/an-aesthetic-image-with-a-university-student-worki.png'
import CardMusic from './components/CardMusic'
import logo from './assets/Images/logo_1.png'

function App() {


  return (
    <>
      <img className="logo"src={logo}/>
      <div className="principal">
        <div>
          <img className='img_principal' src={mainImage} alt="" />
          <h1>Breathe</h1>
          <p className="title_desc">and continue</p>
        </div>
        <section>
          <CardMusic/>
        </section>
      </div>
       
    </>
  )
}

export default App
