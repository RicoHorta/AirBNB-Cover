import { useState } from 'react'
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
import Card from './components/Card';

function App() {


  return (
    <div >
      <Navbar />
      <Categorias />
      <Card />
      <ModalFilter />
    </div>
  )
}

export default App
