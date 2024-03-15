<template>
    <header>
      <div class="header-content">
        <router-link to="/" class="back-link">
          <div class="title">
            <img src="/bags.ico" class="logo" />
            <h1>EcoVue</h1>
          </div>
        </router-link>

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
    background-color: var(--green-11);
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

    .back-link {
    text-decoration: none;

    &:hover {
      text-decoration: none; 
    }
  }

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
      color: #fff;
    }
  }
}
  
  @media only screen and (width < 414px) {
    .header-content{
      display: flex;
      align-items: center;
    }

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