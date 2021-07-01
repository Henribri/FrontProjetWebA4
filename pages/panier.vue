<template>

<div class="flex flex-col items-center ">
  <b class="text-6xl mb-5">Your panier</b>
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
  <b class="text-6xl mb-5">Adress and payment</b>
  <address-form-vue :DisplayModifier=false :State=true> </address-form-vue>
  <button v-on:click="load_command(panier)" class=" mt-16 px-5  text-2xl py-4 rounded-xl text-sm font-medium text-blue-600 bg-white outline-none focus:outline-none m-2 hover:m-0 focus:m-0 border-4 border-blue-600 hover:border-8 focus:border-8 hover:border-blue-800 hover:text-blue-800 focus:border-purple-200 active:border-grey-900 active:text-grey-900 transition-all md:text-4xl">Pay  {{prix_total}} €</button>
</div>

</template>

<script>
import AddressFormVue from '~/components/forms/AddressForm.vue'

export default {
  components:{
    AddressFormVue
  },
  methods:{
    remove(Article){
      this.$store.commit('removeArticle', {article:Article})
    },
        async load_command(panier){
          
          let req_error=true
          let commands=[]
          panier.forEach(menu=>{
                      console.log(menu.restorer)
                      if (!commands[menu.restorer]){
                          commands[menu.restorer]={
                          info:{
                            total_price:this.prix_total,
                            date:new Date().toJSON().slice(0,10).replace(/-/g,'/'),
                            validated:true,
                            restorer_id:menu.restorer,
                            client:
                              {
                                user_id:16,
                                firstname:"henri",
                                lastname:"briaux",
                                email:"henri.seb@thomas.com"
                              },
                            address:this.$store.state.address.address
                          },
                          articles:[],

                          }
                      }
                      commands[menu.restorer].articles.push(menu)

          })
          commands.forEach(command=>{
          this.$axios.$post('http://localhost:3333/create_command',     
          command,
          {
            headers:{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNjI1MTYyMDYxLCJleHAiOjE2MjUxNjM4NjF9.bXsu2ZZ5KzMEVvMIDosE94ta_wzfG6G-B0twRQLVfNs"
          }
  
          }
          )
          });
       this.$store.commit('removePanier')
       this.$router.push('/')

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