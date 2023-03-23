import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//Bootstrap 5.3
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
//CSS
import './App.css'
//Material Design Icons
import '@mdi/font/css/materialdesignicons.css'
//Componentes
import Navbar from './components/Navbar';

function App() {


  return (
    <div >
      <Navbar />
    </div>
  )
}

export default App
