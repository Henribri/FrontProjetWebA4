<template>

<div class="flex flex-col items-center ">
    <div class="flex justify-center content-center flex-col w-5/12 " v-for="menu in panier" :key="menu.id">
      <div class="flex flex-wrap flex-col py-4 px-8 bg-white shadow-lg rounded-lg my-20"> 
      <div class="flex items-center justify-between">
        <h2 class="text-gray-800 text-3xl font-semibold">{{menu.name}}</h2>
        <img src="../assets/burger.jpg" width="200" height="150"/>
      </div>


          <li v-for="article in menu.articles" :key="article.id"> 
          <u>Article :</u>
           <b>{{article.name}}</b>
           <ul>{{article.description}}</ul>
           <b>Type : {{article.type}}</b>
          </li>

           <ul>{{menu.description}} </ul>
           <b v-if="menu.type">Type : {{menu.type}} </b>

           ------


          <b>Price : {{menu.price}} €</b>

        
      </div>
  </div>     

<div class="mb-2"><button class="px-5 py-3 rounded-xl text-sm font-medium text-indigo-600 bg-white outline-none focus:outline-none m-1 hover:m-0 focus:m-0 border border-indigo-600 hover:border-4 focus:border-4 hover:border-indigo-800 hover:text-indigo-800 focus:border-purple-200 active:border-grey-900 active:text-grey-900 transition-all">Pay  {{prix_total}} €<i class="mdi mdi-circle-outline ml-2 text-xl align-middle leading-none"></i></button></div>
</div>
</template>

<script>
export default {
  computed: {
    panier () {
      return this.$store.state.panier.articles
    },
    prix_total(){
      let prix_total=0
      const panier=this.$store.state.panier.articles
      panier.forEach(element => {
        prix_total+=element.price
        
      });
      return prix_total
    }
  }
}
</script>


<style>

</style>