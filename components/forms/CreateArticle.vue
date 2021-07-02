<template>
  <form class="w-full max-w-lg">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="article_name">
          Nom de l'article : 
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="article_name" type="text" placeholder="Burger" v-model="article_name">
        <p v-if="article_name==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="article_description">
          Description de l'article : 
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="article_description" type="text" placeholder="il est tres bon ce burger"  v-model="article_description">
          <p v-if="article_description==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="article_price">
          Prix de l'article : 
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="article_price" type="text" placeholder="15"  v-model="article_price">
        <p v-if="article_price==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
    </div>
    <p class="flex justify-end">
      <button type="submit" value="submit" class="rounded bg-green-200 p-2 " @click="checkForm">Sign In</button>
    </p>
  </form>


</template>

<script>



  export default {
    name: 'CreateDeliveryForm',
    data() {
      return {
        errors: [],
        article_name: null,
        article_description: null,
        article_price: null,
      }
    },
    methods: {
      checkForm(event) {
        console.log('checking form')
        this.errors = []
        this.InputSanitize()
        this.checkInput()
        event.preventDefault();
        },
    checkInput(){
        if (!this.first_name || this.first_name=='null') {
          this.errors.push('firstname required.');
            this.first_name=null
            }
        if (!this.last_name|| this.last_name=='null') {
          this.errors.push('lastname required.');
          this.last_name=null
            }
        if (!this.password|| this.password=='null') {
          this.errors.push('password required.');
          this.password=null
            }
    },
    OnlyNumber(input){
      var re = /^[0-9]+$/;
      return re.test(input)
    },
    InputSanitize(){
        this.first_name = this.$sanitize(this.first_name)
        this.last_name = this.$sanitize(this.last_name)
        this.password = this.$sanitize(this.password)
        this.phone_number = this.$sanitize(this.phone_number)
    },
    async SignIn(){
      await this.$axios.$post('http://20.74.32.244/ceseat_articles/article',{
          user_firstname: this.first_name,
          user_lastname: this.last_name,
          user_email: this.email,
          user_password: this.password,
          user_phone_number: this.phone_number,
      }).then(function (response){
          console.log(response)
      }).catch(error => {
          if(error.response.data.code =="email"){
              this.email_taken = true
          }else{
              consol.log(error.response)
          }
      })

    }
    },

}

</script>


<style>

</style>
