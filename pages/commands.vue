<template>
<div class="flex flex-col items-center ">
  <b class="text-6xl mb-5">Your commands</b>
    <div class="flex justify-center content-center flex-col w-5/12 " v-for="menus in commands" :key="menus.id">
      <div class="flex flex-wrap justify-between flex-row py-4 px-8 bg-white shadow-lg rounded-lg my-20"> 

        <div class="flex flex-col">        <h2 class="text-gray-800 text-3xl font-semibold">{{menus.info.date}}</h2><li v-for="article in menus.articles" :key="article.id" >{{article.name}}</li></div>
        <div class="flex flex-col"><b>Adresse : {{menus.info.address.street_number}} {{menus.info.address.street}}, {{menus.info.address.city}}, {{menus.info.address.postal_code}}</b><b class="text-right">Prix total : {{menus.info.total_price}} € </b></div>
      </div>
      </div>
      
  </div>     

</template>

<script>
export default{
    async asyncData({$axios}) {
    let commands= await $axios.$get('http://localhost:3333/get_historic_command',{ 
          headers:{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNjI1MTQzNDM4LCJleHAiOjE2MjUxNDUyMzh9.bhH1YWhm55v_BmxSp2FF29C6r2tQAGR43VWr7x6Ef9s"
          }}) 


    return {commands}


    },
    computed:{
      getRestorerName(){
        //get user by id
        /*const restorer_name=$axios.$get('http://20.74.18.246/service_user/get_u'
        

        return restorer_name*/
      }

    }

}
</script>

<style>

</style>