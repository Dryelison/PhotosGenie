import React from 'react';
import "./Exemplos.css"

import foto20 from "../img/carousel2-img/foto20.jpg.avif"
import foto21 from "../img/carousel2-img/foto21.jpg.avif"
import foto22 from "../img/carousel2-img/foto22.jpg.avif"
import foto23 from "../img/carousel2-img/foto23.jpg.avif"
import foto24 from "../img/carousel2-img/foto24.jpg.avif"
import foto25 from "../img/carousel2-img/foto25.jpg.avif"
import foto26 from "../img/carousel2-img/foto26.jpg.avif"
import foto27 from "../img/carousel2-img/foto27.jpg.avif"


const Exemplos = () => {
  return (
    <div id='exemplosReais'>
      <div className="exemplos">
        <h2>Exemplos Reais</h2>
        <p>Todas as fotos abaixo foram geradas pelo nosso IA. Nenhuma delas é uma foto real.</p>
        <div className="gallery-container">
          <div className="gallery">
            <div className="gallery-item"><img src={foto20} alt="Exemplo 1" /></div>
            <div className="gallery-item"><img src={foto21} alt="Exemplo 2" /></div>
            <div className="gallery-item"><img src={foto22} alt="Exemplo 3" /></div>
            <div className="gallery-item"><img src={foto23} alt="Exemplo 4" /></div>
            <div className="gallery-item"><img src={foto24} alt="Exemplo 5" /></div>
            <div className="gallery-item"><img src={foto25} alt="Exemplo 6" /></div>
            <div className="gallery-item"><img src={foto26} alt="Exemplo 7" /></div>
            <div className="gallery-item"><img src={foto27} alt="Exemplo 8" /></div>
            <div className="gallery-item"><img src={foto21} alt="Exemplo 9" /></div>
            <div className="gallery-item"><img src={foto23} alt="Exemplo 10" /></div>
            <div className="gallery-item"><img src={foto22} alt="Exemplo 11" /></div>
            <div className="gallery-item"><img src={foto21} alt="Exemplo 12" /></div>
            <div className="gallery-item"><img src={foto20} alt="Exemplo 13" /></div>
            <div className="gallery-item"><img src={foto24} alt="Exemplo 14" /></div>
            <div className="gallery-item"><img src={foto25} alt="Exemplo 15" /></div>


          </div>
        </div>
      </div>

      <div className="comment-section">
        <h2>3.103.220 Retratos Profissionais Criados</h2>
        <p>Leia o que as pessoas têm a dizer sobre nós</p>
        <div className="comment-list">
          <div className="comment">
            <p className="comment-text">
              I was so impressed with the results. The quality is excellent. I have already used them on all my business social media platforms. I highly recommend this service to anyone.
            </p>
            <span className="comment-author">Tim Ewing</span>
            <img  id='tim' src={foto20} alt="Comentário de Tim Ewing" />
          </div>
          <div className="comment">
            <p className="comment-text">
              I was impressed by the simplicity of the process and the exceptional quality of the headshots, which far exceeded my expectations considering the images I provided. The user-friendly interface and clear guidance made it straightforward, while the final headshots showcased a variety of options.
            </p>
            <span className="comment-author">Lynda Dahlheimer</span>
            <img id='lynda' src={foto21} alt="Comentário de Lynda Dahlheimer" />
          </div>
          <div className="comment">
            <p className="comment-text">
              This was great I was so impressed with how easy the process was and the quality of photos
            </p>
            <span className="comment-author">Brenda Piercey</span>
            <img id='brenda' src={foto22} alt="Comentário de Brenda Piercey" />
          </div>
          <div className="comment">
            <p className="comment-text">
              Everyone who has seen them has asked me where I get my suits from! They look that real!
            </p>
            <span className="comment-author">Jeramy Wallace</span>
            <img id='jeramy' src={foto23} alt="Comentário de Jeramy Wallace" />
          </div>
          <div className="comment">
            <p className="comment-text">
              PhotosGenie was so easy to use and gave me a variety of looks and backgrounds to use for my professional use. Cuts down the cost and the time getting a photographer. I will recommend them often.
            </p>
            <span className="comment-author">Joy Olivier</span>
            <img id='joy' src={foto24} alt="Comentário de Joy Olivier" />
          </div>
          <div className="comment">
            <p className="comment-text">
              Unbelievably realistic! I've had PhotosGenie taken by a professional photographer before and the outcome wasn't nearly as good. This is not the photographer's fault - I just struggle to pose naturally for photos and PhotosGenie solves that problem.
            </p>
            <span className="comment-author">Jacques Visser</span>
            <img id='jacques' src={foto25} alt="Comentário de Jacques Visser" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exemplos;