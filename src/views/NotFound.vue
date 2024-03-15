<template>
    <div class="not-found">
        <div class="body">
          <img src="../../public/notfound.png"/>
          <p>A página que você está procurando não existe.</p>
          <router-link to="/" class="back-link">Voltar para a página inicial</router-link>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  };
  </script>
  
  <style scoped lang="scss">
.not-found {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   height: 92vh;
   background-color: var(--mauve-a3);

   p {
    font-family: "Poppins", sans-serif;
   }

  .back-link {
    font-family: "Poppins", sans-serif;
    color: var(--green-11); 
    text-decoration: none;

    &:hover {
      text-decoration: underline; 
    }
  }

  .body {
    flex-grow: 1;
    text-align: center;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

@media only screen and (max-width: 768px) {
  .body img {
    max-width: 300px;
  }

  p,
  .back-link {
    font-size: 15px;
  }
}

  </style>
  
  