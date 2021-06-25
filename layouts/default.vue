<template>
  <div>
      <div class="navbar"> 
      Ceseat
        <div class="navbar-onglet"> Commander </div>
        <div class="navbar-onglet"> Mes commandes </div>
        <div class="navbar-onglet"> Les restaurants </div>
        <NuxtLink to="/shopv1">
          <div class="navbar-onglet"> Le panier </div>
        </NuxtLink>
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
  .navbar {
    display:flex;
    justify-content:space-around;
    align-items:center;
    font-size: 80px;
    font-weight:bold;
    font-family: 'Shrikhand', cursive;
    color: #4686E7;    
    margin:20px;
    background-color:#FFFFFF;

  }

    .footer {
    display:flex;
    justify-content:flex-end;
    align-items:center;
    font-size: 80px;
    font-weight:bold;
    font-family: 'Shrikhand', cursive;
    background-color: #4686E7;    
    margin:20px;

  }

  .navbar-onglet {
  font-size: 30px;
  font-weight:bold;
  font-family:'Quicksand';
  color: #4686E7;    

}
  .footer-onglet {
  font-size: 30px;
  font-weight:bold;
  font-family:'Quicksand';
  color: #FFFFFF;    
  margin:30px;

}
</style>

