import React, { useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import ComoFunciona from './route/ComoFunciona';
// import Precos from './route/Precos';
// import Afiliados from './route/Afiliados';  // Certifique-se de que o caminho está correto
// import Exemplos from './route/Exemplos';
// import Faq from './route/Faq';
// import Register from './route/Register';
// import Home from "./components/Home"

function App() {


  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;