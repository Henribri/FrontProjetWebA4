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
  </div>
  <img class="w-32 h-48 md:w-48 md:h-auto mt-1 rounded col-end-4 " src="https://www.zuerich.com/sites/default/files/web_zuerich_kindli_restaurant_1600x900_8375.jpg" alt="" width="384" height="512">
</figure>

</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    ArticleName : String,
    ArticleDescription : String,
    ArticlePrice: String,

  }
}

</script>


<style>

</style>
