<template>
  <div id='resto' >
    <img src="https://www.zuerich.com/sites/default/files/web_zuerich_kindli_restaurant_1600x900_8375.jpg"
      class=" h-52 w-full object-cover ">
    <div class="text-xl font-medium m-3 text-center">{{this.restorant}}</div>
    <div class=" w-full object-cover block">
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
  name : 'resto',
  components: { ArticleCard
  },
  async asyncData({route, $axios }) {
      const restorer_name = route.params.restorer_name  // En appelant /abc, le slug sera "abc".
      console.log(route.params.restorer_id)
      const articles=await $axios.$get('http://20.74.18.246/service_articles/get_articles_by_restorer',{params:{
      restorer_id:route.params.restorer_id
      }})
      return { restorer_name, articles}
    },
  data (){
    return {
      articles: []
    }

    },
    async fetch(){
      console.info("hreyeryyeryeryeryeryer")
      this.articles=await this.$axios.$get('http://localhost:3333/get_all_articles')

    }

  }
</script>


<style>

</style>
