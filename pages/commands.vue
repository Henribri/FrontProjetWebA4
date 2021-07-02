<template>
<div class="flex flex-col items-center ">
  <b class="text-6xl mb-5">Your commands</b>
    <div class="flex justify-center content-center flex-col w-5/12 " v-for="menus in commands" :key="menus.id">
      <div class="flex flex-wrap justify-between flex-row py-4 px-8 bg-white shadow-lg rounded-lg my-20">

        <div class="flex flex-col">        <h2 class="text-gray-800 text-3xl font-semibold">{{menus.info.restorer.restorer_name}} le {{menus.info.date}}</h2><li v-for="article in menus.articles" :key="article.id" >{{article.name}}</li></div>
        <div class="flex flex-col"><b class="text-right">Adresse : {{menus.info.address.street_number}} {{menus.info.address.street}}, {{menus.info.address.city}}, {{menus.info.address.postal_code}}</b><b class="text-right">Prix total : {{menus.info.total_price}} € </b></div>
      </div>
      </div>

  </div>

</template>

<script>
export default{
    async asyncData({$axios}) {
    let commands= await $axios.$get('http://20.74.32.244/ceseat_commands/historic')
    for(const command of commands) {
        command.info.restorer =  await $axios.$get('http://20.74.32.244/ceseat_users/restorer/'+command.info.restorer_id)
    }
    return {commands}
    }


}
</script>

<style>

</style>