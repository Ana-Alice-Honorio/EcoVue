<template>
    <header>
      <div class="header-content">
        <div class="title">
          <img src="/bags.ico" class="logo" />
          <h1>EcoVue</h1>
        </div>

      <v-row>
        <v-col cols="12">
          <v-text-field
            class="mx-auto"
            density="comfortable"
            menu-icon=""
            append-inner-icon="mdi-microphone cursor-pointer"
            theme="light"
            variant="solo"
            placeholder="Pesquisar produto"
            prepend-inner-icon="mdi-magnify cursor-pointer"
            style="max-width: 350px; max-height: 40px;"
          ></v-text-field>
        </v-col>
      </v-row>

        <div class="cart-button">
          <img src="/cart.ico" class="cart"/>
        </div>

      </div>
    </header>
  </template>

  <style scoped lang="scss">
  header {
    position: fixed;
    width: 100%;
    background-color: var(--green-4);
    border-bottom: 1px solid var(--mauve-a6);
    z-index: 999;
  }
  .header-content {
    margin: 0 auto;
    padding: 16px;
    max-width: 1366px;
    display: flex;

  .title,
  .cart-button {
    display: flex;
    align-items: center;
    gap: 10px;

    cursor: pointer;
    .logo {
      margin-bottom: 5px;
    }

    .cart {
      max-height: 40px;
    }
    
    .logo{
      max-width: 160px;
      max-height: 36px;
    }
  
    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 25px;
      font-weight: 400;
    }
  }
}
  
  @media only screen and (width < 414px) {
    .header-content .title {
      .logo {
        max-width: 128px;
        max-height: 28.8px;
      }
      h1 {
        font-size: 16px;
      }
    }
  }
  </style>