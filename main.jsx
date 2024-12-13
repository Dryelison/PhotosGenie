import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ComoFunciona from './route/ComoFunciona';
import Precos from './route/Precos';
import Afiliados from './route/Afiliados';
import Exemplos from './route/Exemplos';
import Faq from './route/Faq';
import Register from './route/Register';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Create from './components/Create';
import NovoPerfil from './components/NovoPerfil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/como-funciona", element: <ComoFunciona /> },
      { path: "/precos", element: <Precos /> },
      { path: "/exemplos", element: <Exemplos /> },
      { path: "/faq", element: <Faq /> },
    ]
  },
  // {
  //   path: "/afiliados",
  //   element: <Afiliados/>
  // },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword/>
  },
  {
    path: "/SignUp",
    element: <SignUp/>
  },
  {
    path: "/create",
    element: <Create/>
  },
  {
    path: "/NovoPerfil",
    element: <NovoPerfil/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);