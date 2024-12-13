
import foto9 from "../img/img-banner/foto9.png.webp"
import foto8 from "../img/img-banner/foto8.png.webp"
import foto10 from "../img/img-banner/foto10.png.webp"
import foto11 from "../img/img-banner/foto11.png.webp"
import foto12 from "../img/img-banner/foto12.png.webp"
import "./ComoFunciona.css"

const ComoFunciona = () => {

  return (
    <div id="comoFunciona">
      <div className="information-container">
        <div className="title-information">
          <h2>Como Funciona?</h2>
          <p>Obtenha retratos profissionais de IA que são indistinguíveis de fotos reais em 3 passos fáceis.</p>
        </div>
        <div className="information-photos">
          <div className="top-photos">
            <div className="photo1">
              <img src={foto9} alt="Foto 9" />
              <h3>1.Carregue suas imagens</h3>
              <p>Carregue 12+ selfies de alta qualidade: de frente, 1 pessoa em foco, sem bonés ou chapéus.</p>
            </div>
            <div className="photo2">
              <img src={foto8} alt="Foto 8" />
              <h3>2. Nosso IA começa a trabalhar</h3>
              <p>A mágica da IA leva cerca de 90 minutos. Treinamos um modelo inteligente para aprender suas características faciais. Este é o segredo que faz com que suas fotos fiquem tão boas!</p>
            </div>
          </div>
          <div className="bottom-photo">
            <div className="text-content">
              <h3>3. Obtenha fotos incríveis de rosto</h3>
              <p>Depois que o seu modelo estiver treinado, lhe daremos fotos incríveis!</p>
            </div>
            <img src={foto10} alt="Foto 10" />
          </div>
        </div>
      </div>
      <div className="gerador-de-retratos">
      <div className="gerador-text">
        <h2>O Gerador de Retratos Realísticos de <br /> IA Mais Realista</h2>
        <p>Retratos de IA que são indistinguíveis das fotos reais</p>
      </div>
      <div className="gerador-photos">
        <img src={foto11} alt="foto11" /><br /><br />
        <img src={foto12} alt="foto12" />
      </div>
    </div>
    </div>
  )
}

export default ComoFunciona
