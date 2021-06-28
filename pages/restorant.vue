<template>
  <div id='resto' >
    <img src="https://www.zuerich.com/sites/default/files/web_zuerich_kindli_restaurant_1600x900_8375.jpg"
      class=" h-52 w-full object-cover ">
    <div ref="cat_bar" class=" w-full object-cover block bg-white" >
      <ul class="inline-flex">
        <li class="m-3">
          <a class="nav-link active" href="#menus">Menus</a>
        </li>
        <li class="m-3">
          <a class="" href="#articles">Articles</a>
        </li>
        <li class="m-3">
          <a class="" href="#">Autres</a>
        </li>
      </ul>
    </div>
    <div>
      <div id="menus">
        <p class="text-lg font-medium ml-3 overflow-y-scroll">Menus</p>
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 m-4">
          <ArticleCard v-for="article in articles" :key="article.name" :ArticleName='article.name'
            :ArticleDescription="article.description" :ArticlePrice="article.price" />
        </div>
      </div>
      <div id="articles">
        <p class="text-lg font-medium ml-3">Articles</p>
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 m-4">
          <ArticleCard v-for="article in articles" :key="article.name" :ArticleName='article.name'
            :ArticleDescription="article.description" :ArticlePrice="article.price" />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import ArticleCard from '~/components/ArticleCard.vue'


  export default {
    name: 'resto',
    components: {
      ArticleCard
    },
    data() {
      return {
        articles: [{
            description: 'blablalvlazlaldfz;fùazmer;',
            name: 'BigMag',
            price: '5'
          },
          {
            description: 'blablalvlazlaldfz;fùazmer;fgazrga',
            name: 'BigMag',
            price: '5'
          },
          {
            description: 'blablalvlazlaldfz;fùazmer;fgazrga',
            name: 'BigMag',
            price: '5'
          },
          {
            description: 'blablalvlazlaldfz;fùazmer;fgazrga',
            name: 'BigMag',
            price: '5'
          },
          {
            description: 'blablalvlazlaldfz;fùazmer;fgazrga',
            name: 'BigMag',
            price: '5'
          },
          {
            description: 'blablalvlazlaldfz;fùazmer;fgazrga',
            name: 'BigMag',
            price: '5'
          },
          {
            description: 'blablalvlazlaldfz;fùazmer;',
            name: 'BigMag',
            price: '5'
          },
          {
            description: 'blablalvlazlaldfz;fùazmer;fgazrga',
            name: 'BigMag',
            price: '5'
          },
          {
            description: 'blablalvlazlaldfz;fùazmer;fgazrga',
            name: 'BigMag',
            price: '5'
          },
          {
            description: 'blablalvlazlaldfz;fùazmer;fgazrga',
            name: 'BigMag',
            price: '5'
          },
          {
            description: 'blablalvlazlaldfz;fùazmer;fgazrga',
            name: 'BigMag',
            price: '5'
          },
          {
            description: 'blablalvlazlaldfz;fùazmer;fgazrga',
            name: 'BigMag',
            price: '5'
          }
        ]
      }
    },
    methods: {

    },
  }

</script>


<style>

</style>
