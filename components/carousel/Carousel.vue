<template>
  <swiper class="swiper" :options="swiperOption">

    <swiper-slide v-for="restorer in restorers.restorers" :key="restorer.restorer_id" ><NuxtLink :to="`restorant/${restorer.restorer_id}`" ><resto class="resto" name=restorer.restorer_id><img src="../../assets/resto.svg" width="400" height="341"/>{{restorer.restorer_name}}</resto></NuxtLink></swiper-slide>

    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>


<script>


  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: 'swiper-example-loop',
    title: 'Loop mode / Infinite loop',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,


          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        restorers:[
          /*{nom:"Le restaurant de sebi", image:"../../assets/resto.svg"},
          {nom:"Le restaurant de toto", image:"../../assets/resto.svg"}*/
        ]
      }
    },

    async fetch(){
      this.restorers=await this.$axios.$get('http://20.74.18.246/service_users/restorers')

    }

  }


</script>


<style>
.swiper-slide {
margin:20px;
justify-content: center;
  /* Add shadows to create the "card" effect */
  box-shadow: 5px 8px 10px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 25px;

}




.resto{
    display:flex;
    flex-direction:column;
    align-items: center;
    font-size: 10px;
    font-family: 'Shrikhand', cursive;
    flex-wrap:wrap;
}
@media (min-width: 640px) {
  .resto{
    display:flex;
    flex-direction:column;
    align-items: center;
    font-size: 50px;
    font-family: 'Shrikhand', cursive;
    flex-wrap:wrap;
}

}

</style>