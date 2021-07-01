<template>
  <div class="w-full max-w-lg md:border-2 md:rounded-md md:p-4 mt-4	md:shadow-lg ">
    <p class="m-2 font-medium text-xl">Restorant</p>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="street">
          Nom
        </label>
        <input
          class="appearance-none block w-full  text-gray-700 border-2 border-solid border-gray-200 bg-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="restorant_name" type="text" :disabled="state==false"
          v-model="restorant_name">
        <p v-if="restorant_name==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
        <p v-if="restorant_name_error!=null" class="text-red-500 text-xs italic">{{ restorant_name_error }}</p>
      </div>
      <div class="flex justify-end items-center">
        <button class="ml-4 mb-1 mr-2 border rounded p-2 bg-blue-200" v-on:click="state=!state">
          Modifier
          <font-awesome-icon :icon="['fas', 'pencil-alt']" />
        </button>
        <button class="ml-4 mb-1 mr-2 border rounded p-2 bg-green-200" v-on:click="checkForm">
          Enregistrer
        </button>
      </div>
      <address-form :DisplayModifier="true" :address_type="'restorer'" :BoxName="'Adresse du restaurant'" :address_id="restorer_address_id" />
    </div>

  </div>
</template>

<script>
  import AddressForm from '~/components/forms/AddressForm.vue'
  //import { mapGetters } from 'vuex'

  export default {
    components: {
      AddressForm
    },
    layout: 'default',
    name: 'RestorerForm',
    computed: {
      //...mapGetters(['loggedInUser'])
    },
    props: {
      restorer_id: {
        type: Number,
        require: true
      },
    },
    data() {
      return {
        restorer:null,
        errors:[],
        restorant_name: null,
        restorer_address_id: null,
        restorant_name_error:null,
        state: false,
        route : 'http://20.74.32.244/ceseat_users/restorer/' + this.restorer_id

      }
    },
    async beforeMount() {
    console.log(this.route)
      await this.fetch()

    },
    methods: {
      Modify(state) {
        state = !state
      },
      InputSanitize() {
        this.restorant_name = this.$sanitize(this.restorant_name)

      },
      async fetch() {
        this.restorer = await this.$axios.$get('http://20.74.32.244/ceseat_users/restorer/' + this.restorer_id)
        this.restorant_name = this.restorer.restorer_name
        this.restorer_address_id = this.restorer.fk_address_id
      },
      checkForm(event) {
        console.log('checking form')
        this.errors = []
        this.InputSanitize();
        this.checkInput()
        event.preventDefault();
        if (!this.errors.length) {
          this.SignIn()
          return true;
        }
      },
      checkInput() {
        if (!this.restorant_name || this.restorant_name == 'null') {
          this.errors.push('restorant name required.');
          this.restorant_name = null
        }
      },
      async SignIn() {
        await this.$axios.$put('http://20.74.32.244/ceseat_users/restorer', {
          restorer_name: this.restorant_name,
        }).then(function (response) {
          console.log(response)
        }).catch(error => {
            consol.log(error.response)
        })

      }

    },
  }

</script>
