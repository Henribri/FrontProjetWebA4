<template>
  <div class="w-full max-w-lg md:border-2 md:rounded-md md:p-4 mt-4	md:shadow-lg ">
      <div class="mb-4 text-lg font-medium">{{ BoxName }}</div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="city">
          Ville
        </label>
        <input
          class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="city" type="text" placeholder="Arras" :disabled="state==State" v-model="city">
        <p v-if="city==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="street">
          Rue
        </label>
        <input
          class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="street" type="text" placeholder="Pompidou" :disabled="state==State" v-model="street">
        <p v-if="street==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="street_number">
          Numéro
        </label>
        <input
          class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="street_number" type="text" placeholder="5" :disabled="state==State" v-model="street_number">
        <p v-if="street_number==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
      <div class="w-full mt-1 md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="postal_code">
          Code Postal
        </label>
        <input
          class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="postal_code" type="text" placeholder="90210" :disabled="state==State" v-model="postal_code">
        <p v-if="postal_code==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
    </div>
    <div class="flex justify-end items-center">
      <button v-if="DisplayModifier"   class="ml-4 mb-1 mr-2 border rounded p-2 bg-blue-200" v-on:click="state=!state">
        Modifier
        <font-awesome-icon :icon="['fas', 'pencil-alt']" />
      </button>
      <button class="ml-4 mb-1 mr-2 border rounded p-2 bg-green-200" v-on:click="Locate()">
        Enregistrer
      </button>
    </div>

  </div>
</template>

<script>
  //import { mapGetters } from 'vuex'

  export default {
    layout: 'default',
    name: 'AddressForm',
    props: {
      BoxName: String,
      DisplayModifier:true,
      State:false
    },
    computed: {
      //...mapGetters(['loggedInUser'])
    },
    data() {
      return {
        city: "",
        street: "",
        street_number: "",
        postal_code: "",
        city_state: false,
        street_state: false,
        street_number_state: false,
        postal_code_state: false,
        state:false
      }
    },
    methods: {
      Modify(state) {
        state = !state
      },
      Locate(){
        const address=this.$data
        this.$store.commit('address/locate', address)
      }



        
      }
      

  }

</script>
