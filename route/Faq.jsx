import React, { useState } from 'react';
import logo from "../img/logos-img/logo.jpeg"
import "./Faq.css"




const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div id='perguntasFrequentes'>
      <div className="faq-section">
        <h2>Perguntas Frequentes</h2>
        <p>Tem mais alguma pergunta? Você pode escrever para nós em <br /> help@PhotosGenie.com</p>
        <div className="faq-item">

          <div className="faq-question"
          onClick={() => toggleAnswer(0)}>
            <span>O que é PhotosGenie? Como funciona?</span>
            <span className={`arrow ${openIndex === 0 ? 'open' : ''}`}>&#9654;</span>
          </div>
          {openIndex === 0 && (
            <div className="faq-answer">
            <p>O PhotosGenie usa suas próprias fotos para treinar um modelo de IA personalizado que representa sua aparência e pode então gerar suas fotos em vários estilos e roupas. A qualidade das fotos geradas depende muito das imagens que você carrega. Você deve tentar ter o máximo de perspectivas diferentes de seu rosto, olhos, olhando para eles de ângulos diferentes. Cada imagem deve representar algo novo sobre sua aparência e características faciais. As coisas que são constantes de imagem para imagem (óculos, barba) serão reforçadas e aparecerão nas fotos geradas. Depois de carregar as imagens, o modelo de IA pode levar entre 45 minutos e 2 horas para treinar. Uma vez que o treinamento estiver concluído, suas fotos são geradas usando o modelo recém-treinado. Assim que suas fotos estiverem prontas, você será notificado por e-mail. Você pode baixar as fotos e exibi-las em suas várias redes sociais!</p>
          </div>
          )}
        </div>

        <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(1)}>
          <span>O que são Fotos de Rosto Geradas por IA?</span>
          <span className={`arrow ${openIndex === 1 ? 'open' : ''}`}>&#9654;</span>
        </div>
        {openIndex === 1 && (
          <div className="faq-answer">
            <p>Fotos de rosto geradas por IA são uma abordagem moderna...</p>
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(2)}>
          <span>As fotos de rosto geradas por IA são adequadas para uso profissional?</span>
          <span className={`arrow ${openIndex === 2 ? 'open' : ''}`}>&#9654;</span>
        </div>
        {openIndex === 2 && (
          <div className="faq-answer">
            <p>Absolutamente! Nossas fotos de rosto geradas por IA são projetadas...</p>
          </div>
        )}
      </div>
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(3)}>
          <span>Que tipo de imagens devo carregar?</span>
          <span className={`arrow ${openIndex === 3 ? 'open' : ''}`}>&#9654;</span>
        </div>
        {openIndex === 3 && (
          <div className="faq-answer">
            <p>Para obter os melhores resultados, carregue um mínimo de 12 fotos de si mesmo ou da pessoa para a qual está gerando headshots. Certifique-se de que as fotos enviadas APENAS apresentam a pessoa para a qual os headshots estão sendo gerados. Lembre-se, quanto mais fotos você fornecer, melhor. Para resultados ótimos, selecione uma gama diversificada de imagens com a pessoa usando roupas diferentes, em vários locais e sob diversas condições de iluminação</p>
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(4)}>
          <span>Quem possui as imagens geradas? Posso usá-las em qualquer lugar?</span>
          <span className={`arrow ${openIndex === 4 ? 'open' : ''}`}>&#9654;</span>
        </div>
        {openIndex === 4 && (
          <div className="faq-answer">
            <p>Você tem todos os direitos de usar as imagens geradas com suas entradas de fotos. Você também pode usá-las para fins comerciais como achar adequado, dentro dos termos de nosso serviço. A expressão criativa através da IA é um espaço em evolução, e todos estamos descobrindo novas maneiras de proteger a propriedade intelectual, bem como promover inovação rápida. Portanto, continuaremos a melhorar nossos termos de serviço, onde você encontrará uma explicação abrangente de seus direitos e deveres. Por favor, entre em contato se tiver alguma dúvida sobre isso. Leia nossos termos de serviço completos em: https://magicstudio.com/terms-of-service.</p>
          </div>
        )}
      </div>
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(5)}>
          <span>Como posso fazer com que minhas fotos de rosto geradas por IA fiquem o melhor possível?</span>
          <span className={`arrow ${openIndex === 5 ? 'open' : ''}`}>&#9654;</span>
        </div>
        {openIndex === 5 && (
          <div className="faq-answer">
            <p>Comece enviando imagens de alta qualidade. Siga nossas diretrizes sobre quais imagens enviar. Escolha fotos bem iluminadas com seu rosto em foco. As fotos devem ter diferentes poses, expressões e fundos para permitir que nossa IA aprenda o máximo possível. Quanto mais variedade você fornecer, melhor nossa IA poderá gerar fotos de rosto que capturem sua personalidade e estilo.</p>
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(6)}>
          <span>Qual é a resolução das fotos de rosto geradas por IA?</span>
          <span className={`arrow ${openIndex === 6 ? 'open' : ''}`}>&#9654;</span>
        </div>
        {openIndex === 6 && (
          <div className="faq-answer">
            <p>As fotos de rosto têm 1024 x 1536 pixels. Essa resolução garante que suas imagens fiquem ótimas em todas as plataformas de mídia social.</p>
          </div>
        )}
      </div>
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(7)}>
          <span>Quanto tempo leva para gerar as fotos de perfil?</span>
          <span className={`arrow ${openIndex === 7 ? 'open' : ''}`}>&#9654;</span>
        </div>
        {openIndex === 7 && (
          <div className="faq-answer">
            <p>O treinamento do modelo de IA leva entre 90 minutos e 2 horas.</p>
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(8)}>
          <span>Existe um aplicativo para iOS ou Android para PhotosGenie?</span>
          <span className={`arrow ${openIndex === 8 ? 'open' : ''}`}>&#9654;</span>
        </div>
        {openIndex === 8 && (
          <div className="faq-answer">
            <p>Este serviço está disponível apenas na web no momento. Estamos trabalhando em um aplicativo para iOS e Android e lançaremos em breve. Você pode se inscrever em nossa newsletter para ser notificado quando os aplicativos estiverem disponíveis.</p>
          </div>
        )}
      </div>
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(9)}>
          <span>Posso usar fotos de rosto geradas por IA no LinkedIn e outras plataformas de mídia social?</span>
          <span className={`arrow ${openIndex === 9 ? 'open' : ''}`}>&#9654;</span>
        </div>
        {openIndex === 9 && (
          <div className="faq-answer">
            <p>Absolutamente! As PhotosGenie são projetadas para atender aos padrões profissionais, tornando-as perfeitas para LinkedIn, Twitter, Facebook e outras plataformas. Na verdade, muitos de nossos usuários exibem orgulhosamente suas PhotosGenie no LinkedIn. O importante é escolher uma foto de rosto que represente você com precisão e se alinhe com o tom profissional da plataforma.</p>
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(10)}>
          <span>PhotosGenie é gratuito para usar?</span>
          <span className={`arrow ${openIndex === 10 ? 'open' : ''}`}>&#9654;</span>
        </div>
        {openIndex === 10 && (
          <div className="faq-answer">
            <p>Infelizmente, o custo computacional para treinar um modelo personalizado para cada perfil é muito alto para oferecermos o PhotosGenie gratuitamente. Você precisará pagar por cada geração de foto de perfil do PhotosGenie. O dinheiro vai diretamente para proporcionar uma ótima experiência de produto. Entre em contato conosco se desejar discutir um plano personalizado para suas necessidades.</p>
          </div>
        )}
      </div>
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(11)}>
          <span>O PhotosGenie é seguro para os meus dados?</span>
          <span className={`arrow ${openIndex === 11 ? 'open' : ''}`}>&#9654;</span>
        </div>
        {openIndex === 11 && (
          <div className="faq-answer">
            <p>O PhotosGenie respeita sua privacidade e não armazena ou acessa suas imagens além do mínimo necessário para processá-las. Por favor, entre em contato se tiver alguma dúvida sobre isso. Leia nossa política de privacidade completa em: https://magicstudio.com/privacy-policy.</p>
          </div>
        )}
      </div>
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(12)}>
          <span>Eu tenho um problema/sugestão. Como posso entrar em contato com o suporte?</span>
          <span className={`arrow ${openIndex === 12 ? 'open' : ''}`}>&#9654;</span>
        </div>
        {openIndex === 12 && (
          <div className="faq-answer">
            <p>Você pode entrar em contato conosco em help@PhotosGenie.com. Vamos voltar para você o mais rápido possível.</p>
          </div>
        )}
      </div>
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(13)}>
          <span>E se eu não conseguir nenhuma foto boa para a cabeça?</span>
          <span className={`arrow ${openIndex === 13 ? 'open' : ''}`}>&#9654;</span>
        </div>
        {openIndex === 13 && (
          <div className="faq-answer">
            <p>Embora nem todos os retratos sejam esperados ser incríveis, em quase todos os casos você terá pelo menos alguns excelentes. Se você acredita que nem sequer tem 4 retratos decentes em todo o conjunto e não baixou nenhum deles, nós reembolsaremos o valor total do seu pagamento. Basta nos escrever para help@photosgenie.com dentro de 3 dias após a geração de seus retratos.</p>
          </div>
        )}
      </div>

      </div>
      <footer>
        <div className="footer-container">
          <div className="footer-brand">
            <img src={logo} alt="Photos Genie" className="footer-logo" />
            {/* <div className="social-icons">
              <a href="https://twitter.com">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.93 4.93 0 002.165-2.724 9.865 9.865 0 01-3.127 1.197 4.918 4.918 0 00-8.388 4.482A13.959 13.959 0 011.671 3.149a4.92 4.92 0 001.523 6.574 4.902 4.902 0 01-2.23-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.937 4.937 0 01-2.224.084 4.926 4.926 0 004.6 3.417A9.874 9.874 0 010 19.54a13.945 13.945 0 007.548 2.212c9.058 0 14.009-7.496 14.009-13.986 0-.21-.006-.423-.015-.635A10.025 10.025 0 0024 4.557z" fill="#1DA1F2" />
                </svg>
              </a>
              <a href="https://instagram.com">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.317 3.608 1.291.975.975 1.23 2.242 1.291 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.317 2.633-1.291 3.608-.975.975-2.242 1.23-3.608 1.291-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.317-3.608-1.291-.975-.975-1.23-2.242-1.291-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.317-2.633 1.291-3.608.975-.975 2.242-1.23 3.608-1.291 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.5.064-2.702.354-3.678 1.329-.976.976-1.265 2.178-1.329 3.678C2.177 6.196 2.163 6.605 2.163 9.864s.014 3.667.072 4.947c.064 1.5.354 2.702 1.329 3.678.976.976 2.178 1.265 3.678 1.329 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.5-.064 2.702-.354 3.678-1.329.976-.976 1.265-2.178 1.329-3.678.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.064-1.5-.354-2.702-1.329-3.678-.976-.976-2.178-1.265-3.678-1.329-1.28-.058-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 106.162 6.162A6.168 6.168 0 0012 5.838zm0 10.162a3.999 3.999 0 113.999-3.999A4.004 4.004 0 0112 16zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" fill="#C13584" />
                </svg>
              </a>
              <a href="https://linkedin.com">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.23 0H1.77C.79 0 0 .775 0 1.729V22.27C0 23.225.79 24 1.77 24h20.46C23.21 24 24 23.225 24 22.27V1.729C24 .775 23.21 0 22.23 0zm-14.7 20.452H3.56V9.036h3.97v11.416zM5.57 7.497C4.37 7.497 3.4 6.507 3.4 5.322c0-1.19.98-2.175 2.17-2.175 1.2 0 2.17.985 2.17 2.175 0 1.185-.97 2.175-2.17 2.175zM20.45 20.452h-3.97V14.54c0-1.41-.03-3.217-1.96-3.217-1.96 0-2.26 1.534-2.26 3.12v6.01H8.29V9.036h3.8v1.555h.054c.53-1.005 1.82-2.07 3.75-2.07 4.01 0 4.75 2.64 4.75 6.072v5.86h-.01z" fill="#0077B5" />
                </svg>
              </a>
            </div> */}
          </div>
          <div className="footer-links">
            {/* <div className="footer-column">
              <h4>Empresa</h4>
              <ul>
                <li><a href="https://magicstudio.notion.site/The-Handbook-70cd395b4d6e4e50af33d1a64c45dd8b">Manual</a></li>
                <li><a href="https://buttondown.com/magicstudio">História</a></li>
                <li><a href="https://magicstudio.com/privacy-policy/">Política de Privacidade</a></li>
                <li><a href="https://PhotosGenie.com/pt/404?utm_source=google&utm_medium=search-ads&utm_campaign=Search_Non-Brand_Alpha_Global_Tier_3&utm_content=ai-headshots&utm_term=linkedin%20ai%20headshot&gad_source=1&gclid=Cj0KCQjwlIG2BhC4ARIsADBgpVTnxWdHvURbSLT6FEFSta8ypXmUquuzcHldj_yEnw-dnoOE6RYhtJ8aAoClEALw_wcB">Política de Reembolso</a></li>
                <li><a href="https://magicstudio.com/terms-of-service/">Termos de Serviço</a></li>
                <li><a href="https://affiliates.magicstudio.com/signup?campaign=PhotosGenie-affiliate-program">Programa de afiliados</a></li>
              </ul>
            </div> */}
            {/* <div className="footer-column">
              <h4>Entre em contato</h4>
              <ul>
                <li><a href="mailto:ajuda@PhotosGenie.com">ajuda@PhotosGenie.com</a></li>
                <li><a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fgroups%2Fproductphotos%2F">Facebook</a></li>
                <li><a href="https://www.linkedin.com/company/magicstudiohq/">LinkedIn</a></li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="footer-bottom">
          <div className="language-selector">
            <select name="language" id="language">
              <option value="pt">Português</option>
              <option value="en">Inglês</option>
            </select>
          </div>
          <div id="copyright">&copy;2023-2024 Photos Genie, Inc. Todos os direitos reservados.</div>
        </div>
      </footer>
    </div>
  );
}

export default Faq;