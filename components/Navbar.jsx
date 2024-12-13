
import { Link } from 'react-router-dom'
import "../components/Navbar.css"

{/* imagens do primeir carrosel de fotos */}
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

{/*Imagem do carrossel de logos */}

import appleLogo from "../img/logos-img/apple-logo.png"
import booking from "../img/logos-img/booking.png"
import card from "../img/logos-img/card.png"
import dell from "../img/logos-img/dell.png"
import microsoft from "../img/logos-img/microsoft.png"
import nvlogo from "../img/logos-img/nvlogo.jpg"
import search from "../img/logos-img/search.png"
import shopify from "../img/logos-img/shopify.png"
import social from "../img/logos-img/social.png"
import logo from "../img/logos-img/logo.jpeg"
import { useState } from 'react';


const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

//  const handleButtonClick = () => {
//   window.open('/register', '_blank');
//  };

  return (
    <div className='full-screen-container'>
   <nav>
   <button onClick={toggleMenu} id='menu'>Menu</button>
        <ul className={menuVisible ? 'visible' : 'hidden'}>
          <li><a href=''><img src={logo} alt="logo do navbar" /></a></li>
          <li><a href="#gerador">Home</a></li>
          {/* Alteração: Link "Como Funciona" chama scrollToSection */}
          <li><a href="#comoFunciona">Como Funciona</a></li>
          <li><a href='#custos'>Preços</a></li>
          <li><a href="#exemplosReais">Exemplos</a></li>
          <li><a href='#perguntasFrequentes'>FAQ</a></li>
          <a href='/register'><button>Entrar</button></a>
        </ul>
      </nav>
    <div className="header-container">
          <p id='gerador'>GERADOR DE RETRATO REALISTA DE IA MAIS AVANÇADO DO MUNDO</p>
          <h1>Transforme suas selfies em <br /> Retratos Profissionais de Negócios</h1>
          <p>Obtenha fotos de IA incrivelmente hiper-realistas de si mesmo que parecem ter sido tiradas <br /> por um fotógrafo profissional.</p>
         <a href='/register'><button>Crie seus Headshots</button></a>
        </div>
    <div className="carousel-container">
      <div className="carousel">
        {/* Slides */}
        <div className="carousel-slide">
          <div className="photo-large">
            <img src={imageLarge1} alt="Imagem do carousel1" />
            <div className="photo-small">
              <img src={imageSmall1} alt="Imagem do carousel1" />
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="photo-large">
            <img src={imageLarge2} alt="Imagem do carousel2" />
            <div className="photo-small">
              <img src={imageSmall2} alt="Imagem do carousel2" />
            </div>
          </div>
        </div>

        <div className="carousel-slide">
          <div className="photo-large">
            <img src={imageLarge3} alt="Imagem do carousel3" />
            <div className="photo-small">
              <img src={imageSmall3} alt="Imagem do carousel3" />
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="photo-large">
            <img src={imageLarge4} alt="Imagem do carousel4" />
            <div className="photo-small">
              <img src={imageSmall4} alt="Imagem do carousel4" />
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="photo-large">
            <img src={imageLarge5} alt="Imagem do carousel5" />
            <div className="photo-small">
              <img src={imageSmall5} alt="Imagem do carousel5" />
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="photo-large">
            <img src={imageLarge6} alt="Imagem do carousel6" />
            <div className="photo-small">
              <img src={imageSmall6} alt="Imagem do carousel6" />
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="photo-large">
            <img src={imageLarge2} alt="Imagem do carousel2" />
            <div className="photo-small">
              <img src={imageSmall2} alt="Imagem do carousel2" />
            </div>
          </div>
        </div>

        <div className="carousel-slide">
          <div className="photo-large">
            <img src={imageLarge3} alt="Imagem do carousel3" />
            <div className="photo-small">
              <img src={imageSmall3} alt="Imagem do carousel3" />
            </div>
          </div>
        </div>

        <div className="carousel-slide">
          <div className="photo-large">
            <img src={imageLarge6} alt="Imagem do carousel6" />
            <div className="photo-small">
              <img src={imageSmall6} alt="Imagem do carousel6" />
            </div>
          </div>
        </div>

        <div className="carousel-slide">
          <div className="photo-large">
            <img src={imageLarge6} alt="Imagem do carousel6" />
            <div className="photo-small">
              <img src={imageSmall6} alt="Imagem do carousel6" />
            </div>
          </div>
        </div>

        <div className="carousel-slide">
          <div className="photo-large">
            <img src={imageLarge6} alt="Imagem do carousel6" />
            <div className="photo-small">
              <img src={imageSmall6} alt="Imagem do carousel6" />
            </div>
          </div>
        </div>

        <div className="carousel-slide">
          <div className="photo-large">
            <img src={imageLarge6} alt="Imagem do carousel6" />
            <div className="photo-small">
              <img src={imageSmall6} alt="Imagem do carousel6" />
            </div>
          </div>
        </div>

        <div className="carousel-slide">
          <div className="photo-large">
            <img src={imageLarge6} alt="Imagem do carousel6" />
            <div className="photo-small">
              <img src={imageSmall6} alt="Imagem do carousel6" />
            </div>
          </div>
        </div>

        <div className="carousel-slide">
          <div className="photo-large">
            <img src={imageLarge6} alt="Imagem do carousel6" />
            <div className="photo-small">
              <img src={imageSmall6} alt="Imagem do carousel6" />
            </div>
          </div>
        </div>

        <div className="carousel-slide">
          <div className="photo-large">
            <img src={imageLarge6} alt="Imagem do carousel6" />
            <div className="photo-small">
              <img src={imageSmall6} alt="Imagem do carousel6" />
            </div>
          </div>
        </div>


      </div>

      <div className="brands-logo">
        <p>CONFIÁVEL PARA OS MELHORES PROFISSIONAIS</p>
        <div className="brands-carousel">
          <div className="carousel-track">
            <img src="./image/booking.png" alt="booking logo" />
            <img src="./image/microsoft.png" alt="microsoft logo" />
            <img src={booking} alt="booking logo" />
            <img src={card} alt="card logo" />
            <img src={dell} alt="dell logo" />
            <img src={microsoft} alt="microsoft logo" />
            <img src={nvlogo} alt="nv logo" />
            <img src={search} alt="search logo" />
            <img src={shopify} alt="shopify logo" />
            <img src={social} alt="social logo" />
            <img src={nvlogo}alt="booking logo" />
            <img src={shopify}alt="microsoft logo" />
            <img src={booking} alt="booking logo" />
            <img src={card} alt="card logo" />
            <img src={dell} alt="dell logo" />
            <img src={microsoft} alt="microsoft logo" />
            <img src={nvlogo} alt="nv logo" />
            <img src={search} alt="search logo" />
            <img src={shopify} alt="shopify logo" />
            <img src={social} alt="social logo" />
            <img src={booking}alt="booking logo" />
            <img src={booking}alt="microsoft logo" />
            <img src={booking} alt="booking logo" />
            <img src={card} alt="card logo" />
            <img src={dell} alt="dell logo" />
            <img src={microsoft} alt="microsoft logo" />
            <img src={nvlogo} alt="nv logo" />
            <img src={search} alt="search logo" />
            <img src={shopify} alt="shopify logo" />
            <img src={social} alt="social logo" />

          </div>

        </div>

      </div>
      </div>
    </div>
  )
}

export default Navbar;
