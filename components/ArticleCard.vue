<template>
  <figure class="grid grid-cols-2  bg-gray-100 rounded-xl ">
    <div class="pt-1 md:p-2 col-span-2 text-center md:text-left ">
      <p class="text-lg font-semibold">
        {{ ArticleName }}
      </p>
      <figcaption class="font-medium">
        <div class="text-cyan-600">
          {{ ArticleDescription }}
        </div>
        <div class="text-gray-500">
          {{ ArticlePrice }}
        </div>
      </figcaption>
      <div class="flex items-end">
        <button class="ml-1 mb-1" v-on:click="counter+=1">
        <font-awesome-icon :icon="['fas', 'plus']" />
      </button>
      <p class="m-1">
        {{ counter }}
      </p>
      <button class="ml-1 mb-1" v-on:click="counter-=1">
        <font-awesome-icon :icon="['fas', 'minus']" />
      </button>
      </div>
    </div>
    <img class="w-32 h-48 md:w-48 md:h-auto mt-1 rounded col-end-4 "
      src="https://www.zuerich.com/sites/default/files/web_zuerich_kindli_restaurant_1600x900_8375.jpg" alt=""
      width="384" height="512">
  </figure>

</template>

<script>


  export default {
    name: 'ArticleCard',
    props: {
      ArticleName: String,
      ArticleDescription: String,
      ArticlePrice: String,

    },
    data() {
      return {
        counter: 0
      },
      function MinusCounter(){
          if(counter!=0){
            counter-=1
          }
      },
      function PlusCounter(counter){
          counter+=1
      }

    }
  }

</script>


<style>

</style>
