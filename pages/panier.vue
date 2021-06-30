<template>

<div class="flex flex-col items-center ">

    <div class="flex justify-center content-center flex-col w-5/12 " v-for="menu in panier" :key="menu.id">
      <div class="flex flex-wrap flex-col py-4 px-8 bg-white shadow-lg rounded-lg my-20"> 
                  <div class="flex justify-end">
                        <button v-on:click="remove(menu)" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-red-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span class="sr-only">Close menu</span>
                          <!-- Heroicon name: outline/x -->
                          <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                      </button>
        </div>
      <div class="flex items-center justify-between flex-wrap">

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
  <button v-on:click="load_command(panier)" class="fixed bottom-20 md:bottom-1/2 left-3/4 px-5  text-2xl py-4 rounded-xl text-sm font-medium text-blue-600 bg-white outline-none focus:outline-none m-2 hover:m-0 focus:m-0 border-4 border-blue-600 hover:border-8 focus:border-8 hover:border-blue-800 hover:text-blue-800 focus:border-purple-200 active:border-grey-900 active:text-grey-900 transition-all md:text-4xl">Pay  {{prix_total}} €</button>

  
</div>

</template>

<script>
export default {
  methods:{
    remove(Article){
      this.$store.commit('removeArticle', {article:Article})
    },
        load_command(panier){

          let commands=[]
          panier.forEach(menu=>{
                      console.log(menu.restorer)
                      if (!commands[menu.restorer]){
                          commands[menu.restorer]={ids:{user_id:1, restorer_id:menu.restorer},articles:[]}
                      }
                      commands[menu.restorer].articles.push(menu)
          })
          console.log(commands)

    },
  },
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
    },

  }
}
</script>


<style>

</style>