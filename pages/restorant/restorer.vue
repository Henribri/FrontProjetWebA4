<template>
  
<div class="flex flex-col items-center ">
    <b class="text-6xl mb-5">les commandes à valider</b>
        <div class="flex justify-center content-center flex-col  " v-for="menus in commands" :key="menus.id">
            <div  v-if="menus.info.validated === false ">
                <div class="flex flex-wrap justify-between flex-row py-4 px-8 bg-white shadow-lg rounded-lg my-20"> 
                    <div class="flex flex-col">        
                        <h2 class="text-gray-800 text-3xl font-semibold">Commandé le : {{menus.info.date}} par {{menus.info.client.firstname}} {{menus.info.client.lastname}}</h2>
                        <li v-for="article in menus.articles" :key="article.id" >{{article.name}}</li>
                    </div>
                    <div class="flex flex-col">
                        <b class="text-right"> Adresse : {{menus.info.address.street_number}} {{menus.info.address.street}}, {{menus.info.address.city}}, {{menus.info.address.postal_code}}    </b>
                        <b class="text-right"> Prix total : {{menus.info.total_price}} €    </b>
                    </div>
                    <div class="flex flex-col">
                        <button @click="ValidCommand(menus.id)"  class='relative bg-blue-500 text-white p-6 rounded text-2xl font-bold overflow-hidden'>
                            Valider
                        </button>
                    </div>
                </div>
            </div>
        </div>
</div> 

</template>

<script>
export default {
    data() {
      return {}
    },
    async asyncData({$axios}) {
        let commands= await $axios.$get('http://20.74.32.244/ceseat_commands/commands',{ 
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNjI1MjA5Mjk2LCJleHAiOjE2MjUyMTEwOTZ9.8HY8VQDWp0w_aaQnXNaskxSRyoo-aFBT6envJh2mG50"
            }}) 
        return {commands}
    },
    async ValidCommand(command_id){
      await this.$axios.$patch('http://20.74.32.244/ceseat_commands/validate', command_id
      ).then(function (response){
          console.log(response)
          this.$router.push('/delivery/delivery')
      }).catch(error => {
            consol.log(error.response)
      })

    }

}
</script>

<style>

</style>