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
import Categorias from './components/Categorias';
import ModalFilter from './components/ModalFilter';

function App() {


  return (
    <div >
      <Navbar />
      <Categorias />
      <ModalFilter />
    </div>
  )
}

export default App
