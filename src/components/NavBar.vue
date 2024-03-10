<template>
    <header>
      <div class="header-content">
        <div class="title">
          <img src="/bags.ico" class="logo" />
          <h1>EcoVue</h1>
        </div>

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
    top: 0;
    background-color: var(--green-4);
    border-bottom: 1px solid var(--mauve-a6);
    z-index: 999;
  }
  .header-content {
    margin: 0 auto;
    padding: 16px;
    max-width: 1366px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
  .title,
  .cart-button {
    display: flex;
    align-items: center;
    gap: 16px;

    cursor: pointer;
  
    .logo,
    .cart {
      max-width: 160px;
      max-height: 36px;
    }
  
    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 20px;
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