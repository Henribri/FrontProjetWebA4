<template>
  <div>
    <div
      class="flex flex-initial flex-col md:flex-row justify-around items-center text-blue-500 bg-white text-7xl font-bold m-6">
      <NuxtLink to="/">
        <div>Ceseat</div>
      </NuxtLink>
      <div class="navbar-onglet"> Mes commandes </div>
      <div class="navbar-onglet"> Mon panier </div>
      <div class="flex flex-inline items-center">
        <NuxtLink class="font-medium text-xl" to="/ClientRegister">
          <div>Sign Up</div>
        </NuxtLink>
        <div class="font-medium text-xl m-2">|</div>
        <NuxtLink class="font-medium text-xl" to="/">
          <div>Log In</div>
        </NuxtLink>
      </div>
    </div>


    <Nuxt />
    <div class="footer">
      <div class="footer-onglet"> A propos </div>
      <div class="footer-onglet"> Nous contacter </div>
      <div class="footer-onglet"> Support </div>
    </div>

  </div>
</template>

<style>
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    ;
  }

  .navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 80px;
    font-weight: bold;
    font-family: 'Shrikhand', cursive;
    color: #4686E7;
    margin: 20px;
    background-color: #FFFFFF;

  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-family: 'Shrikhand', cursive;
    background-color: #4686E7;
    margin-top: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5rem;


  }

  .navbar-onglet {
    font-size: 30px;
    font-weight: bold;
    font-family: 'Quicksand';
    color: #4686E7;

  }

  .footer-onglet {
    font-size: 15px;
    font-weight: bold;
    font-family: 'Quicksand';
    color: #FFFFFF;
    margin: 30px;

  }

</style>
