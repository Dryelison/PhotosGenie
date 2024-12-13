// import React from 'react';
// import imageLarge1 from "../img/carousel-imgLarge/image-large1.jpg";
// import imageLarge2 from "../img/carousel-imgLarge/image-large2.avif";
// import imageLarge3 from "../img/carousel-imgLarge/image-large3.jpeg";
// import imageLarge4 from "../img/carousel-imgLarge/image-large4.avif";
// import imageLarge5 from "../img/carousel-imgLarge/image-large5.avif";
// import imageLarge6 from "../img/carousel-imgLarge/image-large6.avif";
// import imageSmall1 from "../img/carousel-imgSmall/image-small1.jpg";
// import imageSmall2 from "../img/carousel-imgSmall/image-small2.avif";
// import imageSmall3 from "../img/carousel-imgSmall/image-small3.avif";
// import imageSmall4 from "../img/carousel-imgSmall/image-small4.avif";
// import imageSmall5 from "../img/carousel-imgSmall/image-small5.avif";
// import imageSmall6 from "../img/carousel-imgSmall/image-small6.avif";


import React from 'react'
import ComoFunciona from '../route/ComoFunciona'
import Exemplos from '../route/Exemplos'
import Faq from '../route/Faq'
import Precos from '../route/Precos'
import Navbar from '../components/Navbar'








const Home = () => {
  return (
    <div>
      <Navbar/>
      <ComoFunciona/>
      <Exemplos/>
      <Precos/>
      <Faq/>

    </div>
  )
}

export default Home



// const Home = () => {
//   return (

//     <div className="carousel-container">
//       <section id='Home'>
//       <div className="carousel">
//         {/* Slide 1 */}
//         <div className="carousel-slide">
//           <div className="photo-large">
//             <img src={imageLarge1} alt="Imagem do carousel1" />
//             <div className="photo-small">
//               <img src={imageSmall1} alt="Imagem do carousel1" />
//             </div>
//           </div>
//         </div>
//         <div className="carousel-slide">
//           <div className="photo-large">
//             <img src={imageLarge2} alt="Imagem do carousel2" />
//             <div className="photo-small">
//               <img src={imageSmall2} alt="Imagem do carousel2" />
//             </div>
//           </div>
//         </div>
//         {/* Continue duplicando slides conforme necessário */}
//         <div className="carousel-slide">
//           <div className="photo-large">
//             <img src={imageLarge3} alt="Imagem do carousel3" />
//             <div className="photo-small">
//               <img src={imageSmall3} alt="Imagem do carousel3" />
//             </div>
//           </div>
//         </div>
//         <div className="carousel-slide">
//           <div className="photo-large">
//             <img src={imageLarge4} alt="Imagem do carousel4" />
//             <div className="photo-small">
//               <img src={imageSmall4} alt="Imagem do carousel4" />
//             </div>
//           </div>
//         </div>
//         <div className="carousel-slide">
//           <div className="photo-large">
//             <img src={imageLarge5} alt="Imagem do carousel5" />
//             <div className="photo-small">
//               <img src={imageSmall5} alt="Imagem do carousel5" />
//             </div>
//           </div>
//         </div>
//         <div className="carousel-slide">
//           <div className="photo-large">
//             <img src={imageLarge6} alt="Imagem do carousel6" />
//             <div className="photo-small">
//               <img src={imageSmall6} alt="Imagem do carousel6" />
//             </div>
//           </div>
//         </div>
//         {/* Outros slides aqui */}
//       </div>

//       <div className="brands-logo">
//         <p>CONFIÁVEL PARA OS MELHORES PROFISSIONAIS</p>
//         <div className="brands-carousel">
//           <div className="carousel-track">
//             <img src="./image/booking.png" alt="booking logo" />
//             <img src="./image/microsoft.png" alt="microsoft logo" />
//             {/* Outros logos aqui */}
//           </div>
//         </div>
//       </div>
//       </section>
//       <section id='precos'>
//       <div className="plans-options">
//         <h2>Retratos de alta qualidade, sem os <br /> custos do estúdio</h2>
//         <p>
//           Obtenha retratos profissionais de alta qualidade em minutos. Nenhum fotógrafo
//           <br />
//           necessário. A melhor parte? É 10x mais barato do que uma sessão de fotos
//           <br />
//           física.
//         </p>
//         <div className="bual-button">
//           <button className="btn-option individual active">Individual</button>
//           <button className="btn-option team">Equipes</button>
//         </div>
//       </div>

//       <div className="plans-list">
//         <div className="initial text-box">
//           <h3>Inicial</h3>
//           <p className="price">$39 <span className="dolar">USD</span></p>
//           <hr />
//           <ul className="features">
//             <li>40 Fotos em HD</li>
//             <li>2 Estilos</li>
//             <li>Resposta em 60 min</li>
//           </ul>
//           <a href="#" className="btn">Começar</a>
//         </div>
//         <div className="basic text-box">
//           <h3>Básico</h3>
//           <p className="price">$49 <span className="dolar">USD</span></p>
//           <hr />
//           <ul className="features">
//             <li>100 Fotos em HD</li>
//             <li>5 Estilos</li>
//             <li>Resposta em 90 min</li>
//           </ul>
//           <a href="#" className="btn">Começar</a>
//         </div>
//         <div className="primium text-box">
//           <h3>Premium</h3>
//           <p className="price">$59 <span className="dolar">USD</span></p>
//           <hr />
//           <ul className="features">
//             <li>200 Fotos em HD</li>
//             <li>10 Estilos</li>
//             <li>Resposta em 120 min</li>
//           </ul>
//           <a href="#" className="btn">Começar</a>
//         </div>
//       </div>

//       <div className="guarantee-container">
//         <div className="guarantee">
//           <img src={garantia} alt="Garantia" />
//         </div>
//       </div>
//       </section>
//       </div>
//   );
// };

// export default Home;