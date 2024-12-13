import React, { useEffect, useState } from 'react';
import "./Register.css"
import foto20 from "../img/carousel2-img/foto20.jpg.avif";
import foto21 from "../img/carousel2-img/foto21.jpg.avif";
import foto22 from "../img/carousel2-img/foto22.jpg.avif";
import foto23 from "../img/carousel2-img/foto23.jpg.avif";
import foto24 from "../img/carousel2-img/foto24.jpg.avif";
import foto25 from "../img/carousel2-img/foto25.jpg.avif";
import foto26 from "../img/carousel2-img/foto26.jpg.avif";
import foto27 from "../img/carousel2-img/foto27.jpg.avif";

import imageLarge1 from "../img/carousel-imgLarge/image-large1.jpg";
import imageLarge2 from "../img/carousel-imgLarge/image-large2.avif";
import imageLarge3 from "../img/carousel-imgLarge/image-large3.jpeg";
import imageLarge4 from "../img/carousel-imgLarge/image-large4.avif";
import imageLarge5 from "../img/carousel-imgLarge/image-large5.avif";
import imageLarge6 from "../img/carousel-imgLarge/image-large6.avif";
import imageSmall1 from "../img/carousel-imgSmall/image-small1.jpg";
import imageSmall2 from "../img/carousel-imgSmall/image-small2.avif";
import imageSmall3 from "../img/carousel-imgSmall/image-small3.avif";
import imageSmall4 from "../img/carousel-imgSmall/image-small4.avif";
import imageSmall5 from "../img/carousel-imgSmall/image-small5.avif";
import imageSmall6 from "../img/carousel-imgSmall/image-small6.avif";


import booking from "../img/logos-img/booking.png";
import card from "../img/logos-img/card.png";
import dell from "../img/logos-img/dell.png";
import microsoft from "../img/logos-img/microsoft.png";
import nvlogo from "../img/logos-img/nvlogo.jpg";
import search from "../img/logos-img/search.png";

const Register = () => {
  const comments = [
    "Impressed! Definitely exceeded my expectations! The resemblance is uncanny and I love it.",
    "Highly recommended to try it out - perfect for profile photos for my resume, LinkedIn and all other professional situations!",
    "Amazing service! The photos turned out much better than I expected.",
    "Fantastic tool! It really captured the essence of my professional image."
  ];

  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval (() => {
      setCurrentCommentIndex((prevIndex) => (prevIndex + 1) % comments.length);
    }, 10000);
    return () => clearInterval(intervalId);
    }, [comments.length]);


    const handleInvalid = (e) => {
      e.target.setCustomValidity("The field E-mail is required")
    };

    const handleInput = (e) => {
      e.target.setCustomValidity('')
    };




  return (
    <div className='main-container'>
      <div className="photos-container">
        <img src={foto20} alt="foto 20" />
        <img src={foto21} alt="foto 21" />
        <img src={foto22} alt="foto 22" />
        <img src={foto23} alt="foto 23" />
        <img src={foto24} alt="foto 24" />
        <img src={foto25} alt="foto 25" />
        <img src={foto26} alt="foto 26" />
        <img src={foto27} alt="foto 27" />
        <img src={imageLarge1} alt="imageLarge1" />
        <img src={imageLarge2} alt="imageLarge2" />
        <img src={imageLarge3} alt="imageLarge3" />
        <img src={imageLarge4} alt="imageLarge4" />
        <img src={imageLarge5} alt="imageLarge5" />
        <img src={imageLarge6} alt="imageLarge6" />
        <img src={imageLarge1} alt="imageLarge1" />
        <img src={imageSmall1} alt="imageSmall1" />
        <img src={imageSmall2} alt="imageSmall3" />
        <img src={imageSmall3} alt="imageSmall3" />
        <img src={imageSmall4} alt="imageSmall4" />
        <img src={imageSmall5} alt="imageSmall5" />
        <img src={imageSmall6} alt="imageSmall6" />
        <img src={imageSmall1} alt="imageSmall1" />
        <img src={imageSmall2} alt="imageSmall3" />
        <img src={imageSmall3} alt="imageSmall3" />
        <img src={imageSmall4} alt="imageSmall4" />
        <img src={imageSmall5} alt="imageSmall5" />
        <img src={imageSmall6} alt="imageSmall6" />
        <img src={imageLarge1} alt="imageLarge1" />
        <img src={imageLarge2} alt="imageLarge2" />
        <img src={imageLarge3} alt="imageLarge3" />
        <img src={imageLarge4} alt="imageLarge4" />
        <img src={imageLarge5} alt="imageLarge5" />
        <img src={imageLarge6} alt="imageLarge6" />
        <img src={imageLarge1} alt="imageLarge1" />
        <img src={imageSmall1} alt="imageSmall1" />
        <img src={imageSmall2} alt="imageSmall3" />
        <img src={imageSmall3} alt="imageSmall3" />
        <img src={foto20} alt="foto 20" />
        <img src={foto21} alt="foto 21" />
        <img src={foto22} alt="foto 22" />
        <img src={foto23} alt="foto 23" />
        <img src={foto24} alt="foto 24" />
        <img src={foto25} alt="foto 25" />
        <img src={foto26} alt="foto 26" />
        <img src={foto27} alt="foto 27" />
        <img src={imageSmall4} alt="imageSmall4" />
        <img src={imageSmall5} alt="imageSmall5" />
        <img src={imageSmall6} alt="imageSmall6" />
        <img src={imageSmall1} alt="imageSmall1" />
        <img src={imageSmall2} alt="imageSmall3" />
        <img src={imageSmall3} alt="imageSmall3" />
        <img src={imageSmall4} alt="imageSmall4" />
        <img src={imageSmall5} alt="imageSmall5" />
        <img src={imageSmall6} alt="imageSmall6" />
        <img src={imageLarge1} alt="imageLarge1" />
        <img src={imageLarge2} alt="imageLarge2" />
        <img src={imageLarge3} alt="imageLarge3" />
        <img src={imageLarge4} alt="imageLarge4" />
        <img src={imageLarge5} alt="imageLarge5" />
        <img src={imageLarge4} alt="imageLarge4" />
        <img src={imageLarge5} alt="imageLarge5" />
        <img src={imageLarge6} alt="imageLarge6" />
        <img src={imageLarge1} alt="imageLarge1" />
        <img src={imageSmall1} alt="imageSmall1" />
        <img src={imageSmall2} alt="imageSmall3" />
        <img src={imageSmall3} alt="imageSmall3" />
        <img src={foto20} alt="foto 20" />
        <img src={foto21} alt="foto 21" />
        <img src={foto22} alt="foto 22" />
        <img src={foto23} alt="foto 23" />
        <img src={foto24} alt="foto 24" />
        <img src={foto25} alt="foto 25" />
        <img src={foto26} alt="foto 26" />
        <img src={foto27} alt="foto 27" />
        <img src={imageSmall4} alt="imageSmall4" />
        <img src={imageSmall5} alt="imageSmall5" />
        <img src={imageSmall6} alt="imageSmall6" />
        <img src={imageSmall1} alt="imageSmall1" />
        <img src={imageSmall2} alt="imageSmall3" />
        <img src={imageSmall3} alt="imageSmall3" />
        <img src={imageSmall4} alt="imageSmall4" />
        <img src={imageSmall5} alt="imageSmall5" />
        <img src={imageSmall6} alt="imageSmall6" />
        <img src={imageLarge1} alt="imageLarge1" />
        <img src={imageLarge2} alt="imageLarge2" />
        <img src={imageLarge3} alt="imageLarge3" />
        <img src={imageLarge4} alt="imageLarge4" />
        <img src={imageLarge5} alt="imageLarge5" />
        <img src={imageLarge4} alt="imageLarge4" />
        <img src={imageLarge5} alt="imageLarge5" />
        <img src={imageLarge6} alt="imageLarge6" />


        {/* Repetição de imagens conforme necessário */}
      </div>

      <div className="content-box">
        {/* Dividindo o conteúdo principal em duas colunas */}
        <div className="main-content">
          <div className="column left-column">
            <h2>Transforme suas selfies em Retratos Profissionais de Negócios</h2>
            <br />
            <h2><span style={{color: 'grey'}}>Sign into your account</span></h2>

            <div className="subscription-form">
            <form className="form">
            <input type="text" name="text" placeholder='E-mail' required onInvalid={handleInvalid} onInput={handleInput}/>
            <input type="password" name="password" required onInvalid={handleInvalid} onInput={handleInput} placeholder='Password' />
            <button style={{cursor: 'pointer'}}><a href='/create'>Sign In</a></button>
            </form>
            </div><br />
            <div className="subscription">
              <a href='/forgotPassword' style={{cursor: 'pointer', color: 'black'}}>Forgot password?</a><br /><br />
              <a href='/signUp' style={{cursor: 'pointer', color: 'black'}}>Don't you have an account?</a>
            </div>
            <ul className="benefits-list">
              <li>Não é necessária sessão fotográfica</li>
              <li>Altamente realista</li>
              <li>Garantia de devolução do dinheiro 100%</li>
            </ul>
          </div>
          {/* Linha divisória vertical */}
          <div className="vertical-divider"></div>
          <div className="column right-column">
            <p className="testimonial">{comments[currentCommentIndex]}</p>
            <div className="logos-title">
              <h4>1223736 fotos</h4>
              <p>criadas para clientes felizes</p>
              <div className="logos">
                <img src={booking} alt="booking logo" />
                <img src={card} alt="card logo" />
                <img src={dell} alt="dell logo" />
                <img src={microsoft} alt="microsoft logo" />
                <img src={nvlogo} alt="nv logo" />
                <img src={search} alt="search logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;