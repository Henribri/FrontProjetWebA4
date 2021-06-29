<template>

<div>
<div class="text-10xl font-bold text-4xl sm:text-8xl font-extrabold m-3">
Quel restaurant vous fait envie aujourd'hui ?
</div>
<carousel class="carousel">

</carousel>

</div>

</template>

<script>
    import Carousel from '../components/carousel/Carousel'

        export default{
        data(){
            return {
                components:{
                    Carousel,
                }
            }
        }
        
    }
</script> 


<style>

</style>
