<template>
    <footer>
      <p>
        2024 &copy; Todos os direitos reservados a EcoVue
      </p>
    </footer>
  </template>
  
  <style scoped lang="scss">
  footer {
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    line-height: 20px;
    color: var( --mauve-12);
    background-color: var(--green-11);
    border-top: 1px solid var(--mauve-a6);

     p {
      color: #fff;
     }
  }
  
  @media only screen and (max-width: 768px) {
    footer {
      padding: 15px;
      font-weight: 500;
    }
  }

  </style>