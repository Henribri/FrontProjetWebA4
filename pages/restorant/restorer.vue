<template>
  
<div class="flex flex-col items-center ">
    <b class="text-6xl mb-5">Les commandes à valider</b>
        <div class="flex justify-center content-center flex-col  " v-for="menu in commands" :key="menu.id">
            <div  v-if="menu.info.validated === false ">
                <div class="flex flex-wrap justify-between flex-row py-4 px-8 bg-white shadow-lg rounded-lg my-20"> 
                    <div class="flex flex-col">        
                        <h2 class="text-gray-800 text-3xl font-semibold">Commandé le : {{menu.info.date}} par {{menu.info.client.firstname}} {{menu.info.client.lastname}}</h2>
                        <li v-for="article in menu.articles" :key="article.id" >{{article.name}}</li>
                    </div>                    
                    <div class="flex flex-col justify-between">
                    <div class="flex flex-col">
                        <b class="text-right"> Adresse : {{menu.info.address.street_number}} {{menu.info.address.street}}, {{menu.info.address.city}}, {{menu.info.address.postal_code}}    </b>
                        <b class="text-right"> Prix total : {{menu.info.total_price}} €    </b>
                    </div>
                    <div class="flex flex-col">
                        <button @click="ValidCommand(menu._id)"  class='relative bg-blue-500 text-white p-6 rounded text-2xl font-bold overflow-hidden'>
                            Valider
                        </button>
                    </div>
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
    async asyncData({$axios, $auth}) {
        let commands= await $axios.$get('http://20.74.32.244/ceseat_commands/commands-restorer',{ 
            params:{
                restorer_id: $auth.user.fk_restorer_id
            }}) 
        return {commands}
    },
    methods :{
        async ValidCommand(command_id){
            await this.$axios.$patch('http://20.74.32.244/ceseat_commands/validate',{ command_id }
            ).then(function (){
                this.$nuxt.$router.push('/restorant/restorer')
            })
        }
    }
}
</script>

<style>

</style>