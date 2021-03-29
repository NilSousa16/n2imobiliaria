import React from 'react';

// import { Title } from './styled';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Example from '../../components/Example';

const Home: React.FC = (props) => {
  return (
    <>
      <Header />
      <Example {...props} />
      <h1>Formulário Buscas</h1>
      <h1>Lista de Imóveis</h1>
      <h1>Destaques</h1>
      <h1>...</h1>
      <Footer />
    </>
  );
};

export default Home;