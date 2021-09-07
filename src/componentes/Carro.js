import React from 'react'

export default  class Carro extends React.Component {
    constructor(props){
        super(props)
        this.modelo='Golf'
        this.state ={
            ligado:false,
            velAtual:0,
        }
    }
    ligarDesligar() {
      //this.state.ligado = true
      //this.setState({ligado:!this.state.ligado})
      this.setState(
          (state) => ({
              ligado:!state.ligado
        })
      )
    }
    acelerar() {
        this.setState(
            (state, props)=>(
               {velAtual:state.velAtual + props.fator}
               ) 
        )          
    }
    render() {
        return (
            <div>
            <h1>Meu Carro</h1>
            <p>Modelo: {this.modelo}</p>  
            <p>ligado: {this.state.ligado ? 'sim' : 'Não'}</p>   
            <p>velAtual: {this.state.velAtual}</p>  
            <button onClick={()=>this.ligarDesligar()}>{this.state.ligado ? 'Desligar Carro' : 'Ligar Carro'}</button>       
            <button onClick={()=>this.ligarDesligar()}>Aceler</button>         
            </div>
        )
    }
}

