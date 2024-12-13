import React from "react"
import "../components/NovoPerfil.css"

const NovoPerfil = () => {

    return(
            <div className="perfil">
            <h1 id='criar'>Criar novo perfil</h1>
              <div className="pessoa">
              <button className='btns'> <h2>Para uma pessoa</h2>
              <p>Criar fotografias de rosto para uma pessoa</p></button>
              </div>
              <div className="empresa">
              <button className='btns'><h2>Para uma equipe ou empresa</h2>
              <p>Convide a sua equipe para criar suas fotograficas de rosto</p></button>

              <div className="btn-2">
                <button id='bottom-button'>Conituar</button>
              </div>
              </div>

            </div>
    )
}

export default NovoPerfil