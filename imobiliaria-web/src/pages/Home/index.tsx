import React from 'react';

import { Title } from './styled';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Title>Home</Title>
      <Title>Home</Title>
      <h1>Página principal</h1>
      <Footer />
    </>
  );
};

export default Home;