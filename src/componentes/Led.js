import React from 'react'
import LedVerde from './img/ledVerde.jpg'
import LedVermelho from './img/ledVermelho.jpg'

export default function Led(props){    
  return (
    <>
      <img style={{width:'50px'}} src={props.ligado?LedVerde:LedVermelho}/>
      <button onClick={()=>props.setLigado(!props.ligado)}>{props.ligado?'Desligar':'Ligar'}</button>
    </>
  );
}

