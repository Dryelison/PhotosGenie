import React, { useState } from 'react';
import "./Precos.css"
import garantia from "../img/logos-img/garantia.png.webp"

const Precos = (props) => {
  const [visibleBox, setVisibleBox] = useState('individual');

  const handleButtonClick = (box) => {
    setVisibleBox(box);


    };


  return (
    <>
      <div id='custos' className="plans-options">
        <h2>Retratos de alta qualidade, sem os <br /> custos do estúdio</h2>
        <p>
          Obtenha retratos profissionais de alta qualidade em minutos. Nenhum fotógrafo
          <br />
          necessário. A melhor parte? É 10x mais barato do que uma sessão de fotos
          <br />
          física.
        </p>
        <div className="ual-button">
          <div className="equipes-button">
          <button className="btn-option individual active" onClick={() => handleButtonClick('individual')}>Individual</button>
          {/* <button className="btn-option team" onClick={() => handleButtonClick('equipes')}>Equipes</button> */}
          {visibleBox === 'equipes'&& (<div className="equipes text-box">
          <h3>$49 Salvar 10%</h3>
          <p className="price">$44 por membro<span className="dolar">USD</span></p>
          <p>20+ membros Salvar 20%</p>
          <p>100+ membros Economize 30%</p>
          <a href="/register" className="btn">Começar</a>
          <hr />
          <ul className="features">
            <li>100 fotos HD de perfil para cada membro da equipe</li>
            <li>tempo de resposta de 120 minutos</li>
            <li>Variedade em trajes profissionais e contextos</li>
            <li>Adicionar facilmente novos membros à equipe</li>
            <li>Privacidade em primeiro lugar para proteger seus dados</li>
            <li>Suporte prioritário</li>
          </ul>
        </div>
        )}
          </div>
          </div>

        </div>
      <div className="plans-list">
        {visibleBox === 'individual' && (
        <div className="initial text-box">
          <h3>Inicial</h3>
          <p className="price">$39 <span className="dolar">USD</span></p>
          <hr />
          <ul className="features">
            <li>40 Fotos em HD</li>
            <li>2 Estilos</li>
            <li>Resposta em 60 min</li>
          </ul>
          <a href="/register" className="btn">Começar</a>
        </div>
        )}
        {visibleBox === 'individual' && (
        <div className="basic text-box">
          <h3>Básico</h3>
          <p className="price">$49 <span className="dolar">USD</span></p>
          <hr />
          <ul className="features">
            <li>100 Fotos em HD</li>
            <li>5 Estilos</li>
            <li>Resposta em 90 min</li>
          </ul>
          <a href="/register" className="btn">Começar</a>
        </div>
        )}
        {visibleBox === 'individual' && (
        <div className="primium text-box">
          <h3>Premium</h3>
          <p className="price">$59 <span className="dolar">USD</span></p>
          <hr />
          <ul className="features">
            <li>200 Fotos em HD</li>
            <li>10 Estilos</li>
            <li>Resposta em 120 min</li>
          </ul>
          <a href="/register" className="btn" >Começar</a>
        </div>
        )}
      </div>


      <div className="guarantee-container">
        <div className="guarantee">
          <img src={garantia} alt="Garantia" />
        </div>
      </div>


    </>
  );
}

export default Precos;