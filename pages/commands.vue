<template>
  <div @mouseover="refresh()" class="flex flex-col items-center ">
    <b class="text-6xl mb-5">Your commands</b>
    <div @mouseover="refresh()" class="flex justify-center content-center flex-col w-5/12 "
      v-for="menus in commands.data" :key="menus.id">
      <div class="flex flex-wrap justify-between flex-row py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div class="flex flex-col">
          <h2 class="text-gray-800 text-3xl font-semibold">{{menus.info.date}}</h2>
          <li v-for="article in menus.articles" :key="article.id">{{article.name}}</li>
        </div>
        <div class="flex flex-col"><b class="text-right">Adresse : {{menus.info.address.street_number}}
            {{menus.info.address.street}}, {{menus.info.address.city}}, {{menus.info.address.postal_code}}</b><b
            class="text-right">Prix total : {{menus.info.total_price}} € </b>
            <b
            class="text-right flex justify-end">Etat : <div v-if='menus.info.validated==false'> En Attente</div> <div v-if='menus.info.validated==true'> En route !</div></b>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        commands: []
      }
    },
    async fetch() {
      this.commands = await this.$axios.get('http://20.74.32.244/ceseat_commands/commands')
      console.log('fetched')
      console.log(this.commands.data)

    },
    methods: {
      refresh() {
        if (this.$fetchState.timestamp <= Date.now() - 30000) {
          this.$fetch()
        }
      },
      mounted() {
        this.fetch()
      },
      /*getRestorerName(restorer_id){
         let restorer_name= this.$axios.$get('http://20.74.32.244/ceseat_users/restorer/'+restorer_id,{
           headers:{
             Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNjI1MTU0NDE3LCJleHAiOjE2MjUxNTYyMTd9.xlQi0NMhrTNc3DtkUohvj8rjOkPWPhUUbYSfRTJV2s8"
           }})

       }*/

    }

  }

</script>

<style>

</style>
