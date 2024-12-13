import React from 'react'
import "../components/Create.css"
import foto13 from '../img/img-banner/foto13.png.webp'
import logo from "../img/logos-img/logo.jpeg"



const Create = () => {

  return (
    <div>
      <div className="main-create">
        <div className="create">
            <nav>
              <ul>
              <li><a href=''><img src={logo} alt="logo do navbar" /></a></li>
              </ul>
            </nav>
            <div className="create-content">
              <div className="img">
                <img src={foto13} alt="img" />
              </div>
              <div className="title-text">
                <h1>Criar um novo perfil</h1>
                <h4>Carregue suas fotografias e tenha</h4>
                <h4>fotografias de rosto profissionais em alguns minutos</h4>
                </div>
                <div className="btn">
                  <button id='start'> <a href='/NovoPerfil'>Começar a trabalhar</a></button>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Create
