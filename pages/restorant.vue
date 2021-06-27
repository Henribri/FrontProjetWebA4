<template>
  <div id='resto'>
    <img src="https://www.zuerich.com/sites/default/files/web_zuerich_kindli_restaurant_1600x900_8375.jpg"
      class=" h-52 w-full object-cover ">

    <div class=" w-full object-cover block">
      <ul class="inline-flex">
        <li class="m-3">
          <a class="nav-link active" href="#">Menus</a>
        </li>
        <li class="m-3">
          <a class="" href="#">Articles</a>
        </li>
        <li class="m-3">
          <a class="" href="#">Autres</a>
        </li>
      </ul>
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 m-4">
      <ArticleCard v-for="article in articles" :key="article.name" :ArticleName='article.name' :ArticleDescription="article.description" :ArticlePrice="article.price" />
    </div>
  </div>

</template>

<script>
import ArticleCard from '~/components/ArticleCard.vue'

  export default {
  name : 'resto',
  components: { ArticleCard
  },
  data (){
    return {
      articles: [
        {
          description : 'blablalvlazlaldfz;fùazmer;fgazrgazsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          name : 'BigMag',
          price : '5'
        },
        {
          description : 'blablalvlazlaldfz;fùazmer;fgazrga',
          name : 'BigMag',
          price : '5'
        },
        {
          description : 'blablalvlazlaldfz;fùazmer;fgazrga',
          name : 'BigMag',
          price : '5'
        },
        {
          description : 'blablalvlazlaldfz;fùazmer;fgazrga',
          name : 'BigMag',
          price : '5'
        },
        {
          description : 'blablalvlazlaldfz;fùazmer;fgazrga',
          name : 'BigMag',
          price : '5'
        },
        {
          description : 'blablalvlazlaldfz;fùazmer;fgazrga',
          name : 'BigMag',
          price : '5'
        }
      ]
    }

  }
}

</script>


<style>

</style>
