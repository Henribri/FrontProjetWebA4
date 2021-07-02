<template>
  <div id='restorant' >
    <img src="https://www.zuerich.com/sites/default/files/web_zuerich_kindli_restaurant_1600x900_8375.jpg"
      class=" h-52 w-full object-cover ">
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
          <ArticleCard v-for="menu in menus" :key="menu.name" :ArticleName='menu.name'
            :ArticleDescription="menu.description" :ArticlePrice="menu.price" :Article='menu' :Panier="panier_user" />
        </div>
      </div>
      <div id="articles">
        <p class="text-lg font-medium ml-3">Articles</p>
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 m-4">
          <ArticleCard v-for="article in articles" :key="article.name" :ArticleName='article.name'
            :ArticleDescription="article.description" :ArticlePrice="article.price" :Article='article' :Panier="panier_user"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import ArticleCard from '~/components/ArticleCard.vue'
  export default {
  name : 'restorant',
  components: { ArticleCard
  },
  async asyncData({$axios, params }) {
      const restorer_id=params.restorant
      const articles=await $axios.$get('http://20.74.32.244/ceseat_articles/articles-restorer',{params:{
      restorer_id:restorer_id
      }})
      const menus=await $axios.$get('http://20.74.32.244/ceseat_articles/menus-restorer',{params:{
      restorer_id:restorer_id
      }})
      const panier_user=0
      return {  articles, menus, restorer_id,  panier_user}
    },
    mounted(){
/*
      if (!this.$store.state.paniers.find(panier => panier.id.user_id==1)){
        this.$store.commit('addPanier', {articles:[],id:{user_id:1, restorer_id:this.restorer_id}})
      }

     this.panier_user=this.$store.getters.paniers.find(panier => panier.id.user_id==1)
*/


    },

  }
</script>


<style>

</style>
