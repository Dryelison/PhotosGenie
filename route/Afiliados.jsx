import React from 'react';
import './Afiliados.css'; // Certifique-se de importar seu arquivo CSS

const Afiliados = () => {
  return (
    <div className="main-container">

      {/* Caixa centralizada com todo o conteúdo */}
      <div className="box-content">
        <p>
          Hey! <br />We are super excited to have you onboard our affiliate program. <br /><br />Earn Big: 30% commission on all sales. <br /> Extended Reach: 30-day (long enough) cookie length for lasting attribution. <br /> Frequent Payouts: Get paid every 30 days. <br /> Low Threshold: Only $100 minimum payout. <br /> <br />

          For content creators looking to provide an authentic review to their audience about us, please request a <br />complimentary headshots profile by contacting us at partners@PhotosGenie.com. <br /> <br />

          Partner with us at PhotosGenie and be part of a visionary community changing the landscape of <br />professional headshots with AI. <br />
          -- <br />
          Vinod, Founder & CEO, PhotosGenie.com by Magic Studio. <br /> <br /><hr />
        </p>
        {/* Formulário dentro da mesma caixa */}
        <form className="new-affiliate">
          <div className="datas">
            <label>First name</label>
            <input type="text" name="text" placeholder='Luke' />
          </div>

          <div className="datas">
            <label>Last name</label>
            <input type="text" name="text" placeholder='Skywalker' />
          </div>

          <div className="datas">
            <label>Email</label>
            <input type="email" name="email" placeholder='luke@jedi.com' />
          </div>

          <div className="datas">
            <label>Password</label>
            <input type="password" name="password" placeholder='hunter2' />
          </div>

          <div className="datas">
            <label>Confirm password</label>
            <input type="password" name="password" placeholder='hunter2' />
          </div>

          {/* Botão de submissão dentro do formulário */}
          <div className="confirm">
            <input type="submit" value="Sign up" />
          </div>

          {/* Links de rodapé e termos */}
          <div className="text-footer">
            By signing up you agree to the <a target='_blank' href=''>Terms of Service</a>
          </div>

          <div className="after-footer">
            Already have an account? <a href='/login'>Login</a>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Afiliados;