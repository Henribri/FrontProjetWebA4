<template>
  <figure class="grid grid-cols-2   md:p-0 bg-gray-100 rounded-xl ">
    <div class="pt-1 md:p-2 col-span-2 m-1 text-left ">
      <p class="text-lg font-semibold">
        {{ ArticleName }}
      </p>
      <figcaption class="font-medium ">
        <div class="truncate">
          {{ ArticleDescription }}
        </div>
        <div class="text-gray-500">
          {{ ArticlePrice }}
        </div>
      </figcaption>
      <div class="flex items-center mt-5 ">
        <button class="ml-1 mb-1" v-on:click="CounterPlus( Article)">
        <font-awesome-icon :icon="['fas', 'plus']" />
      </button>
      <p class="m-1">
        {{ counter }}
      </p>
      <button class="ml-1 mb-1" v-on:click="CounterMinus()">
        <font-awesome-icon :icon="['fas', 'minus']" />
      </button>
      </div>
    </div>
    <img class="w-32 h-36 md:w-48 md:h-40 rounded  col-end-4 "
      src="https://www.zuerich.com/sites/default/files/web_zuerich_kindli_restaurant_1600x900_8375.jpg" alt=""
      width="384" height="512">
  </figure>

</template>

<script >


  export default {
    name: 'ArticleCard',
    props: {
      ArticleName: String,
      ArticleDescription: String,
      ArticlePrice: String,
      Article:Object,
      Restorer_id:Number,



    },
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      CounterPlus(Article){
        this.counter+=1
        console.log(Article)
        this.$store.commit('addArticle', {article:Article})

      },
      CounterMinus(){
        if(this.counter!=0){
          this.counter-=1
        }
      }

    }
  }

</script>


<style>


</style>
