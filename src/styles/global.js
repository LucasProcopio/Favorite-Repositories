import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    html, body, #root {
      min-height: 100%;
    }

    body {
      background: #456990;
      -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
      color: #222;
      font-size: 14px;
      font-family: Arial, Helvetica, sans-serif;
    }

    button {
      cursor: pointer;
    }
  }

  .Toastify__toast.error-toast {
    background: #FF3366 ;
    color: #f1f1f1 ;
    border-radius: 4px ;
    padding: 15px 10px;
    font-weight: 600;
    word-spacing: 1.2px;

  }

  .error-toast.Toastify__progress-bar--default{
    background: none;
  }
`;
