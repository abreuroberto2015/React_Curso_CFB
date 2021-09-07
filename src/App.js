import React, { useState } from 'react'

import Carro from './componentes/Carro'


export default function App() {  
  const [carro,setCarro] =useState(true)
  const mostrarOcultarCarro=()=>{
    setCarro(!Carro)
  }
  return (
    <>
    <h1>Componentes de Classe</h1>
    {carro ? <carro fator={10}/> : ''}
    <button onClick={() => mostrarOcultarCarro()}>Ocultar</button>      
    </>
  );
}

