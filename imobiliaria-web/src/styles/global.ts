/**
 * CSS Global da aplicação
 */
import { createGlobalStyle } from 'styled-components';

import imageGit from '../assets/imageGit.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5 url(${imageGit}) no-repeat 70% top;
    /** suaviza fonte */
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16x, Roboto, sans-serif;
  }

  /** div root do index.html
      área da página
   */
  #root {
    max-width: 1260px;
    /** centraliza */
    margin: 0 auto;
    padding: 10px 10px;
  }

  button {
    cursor: pointer;
  }
`;

