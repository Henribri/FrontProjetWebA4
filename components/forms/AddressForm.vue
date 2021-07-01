<template>
  <div class="w-full max-w-lg md:border-2 md:rounded-md md:p-4 mt-4	md:shadow-lg ">
      <div class="mb-4 text-lg font-medium">{{ BoxName }}</div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="city">
          Ville
        </label>
        <input
          class="appearance-none block w-full  text-gray-700 border-2 border-solid border-gray-200 bg-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="city" type="text" placeholder="Arras" :disabled="state==State" v-model="city">
        <p v-if="city==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="street">
          Rue
        </label>
        <input
          class="appearance-none block w-full  text-gray-700 border-2 border-solid border-gray-200 bg-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="street" type="text" placeholder="Pompidou" :disabled="state==State" v-model="street">
        <p v-if="street==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="street_number">
          Numéro
        </label>
        <input
          class="appearance-none block w-full  text-gray-700 border-2 border-solid border-gray-200 bg-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="street_number" type="text" placeholder="5" :disabled="state==State" v-model="street_number">
        <p v-if="street_number==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
      <div class="w-full mt-1 md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="postal_code">
          Code Postal
        </label>
        <input
          class="appearance-none block w-full text-gray-700 border-2 border-solid border-gray-200 bg-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="postal_code" type="text" placeholder="90210" :disabled="state==State" v-model="postal_code">
        <p v-if="postal_code==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
    </div>
    <div class="flex justify-end items-center">
      <button v-if="DisplayModifier"   class="ml-4 mb-1 mr-2 border rounded p-2 bg-blue-200" v-on:click="state=!state">
        Modifier
        <font-awesome-icon :icon="['fas', 'pencil-alt']" />
      </button>
      <button v-if="!DisplayModifier" class="ml-4 mb-1 mr-2 border rounded p-2 bg-green-200" v-on:click="Locate()">
        Enregistrer
      </button>
      <button v-if="DisplayModifier" class="ml-4 mb-1 mr-2 border rounded p-2 bg-green-200" v-on:click="checkForm">
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
      BoxName: {
        type : String,
        require : true
      },
      address_id: {
        type : Number,
        require : true
      },
      address_type: {
        type : String,
        require : true
      },
      DisplayModifier:true,
      State:false
    },
    computed: {
      //...mapGetters(['loggedInUser'])
    },
    beforeMount(){
      this.fetch()
    },
    data() {
      return {
        address : null,
        errors:[],
        city: null,
        street: null,
        street_number: null,
        postal_code: null,
        city_state: false,
        street_state: false,
        street_number_state: false,
        postal_code_state: false,
        state:false,
        route: "http://localhost:3333/address/" + this.address_type
      }
    },
    methods: {
      Modify(state) {
        state = !state
      },
      Locate(){
        const address=this.$data
        this.$store.commit('address/locate', address)
      },
      async fetch(){
         this.address=await this.$axios.$get(this.route)
         this.city = this.address.address_city
         this.street =this.address.address_street
         this.street_number = this.address.address_street_number
         this.postal_code = this.address.address_postal_code

         console.log(this.address)
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
        if (!this.city || this.city == 'null') {
          this.errors.push('restorant name required.');
          this.city = null
        }
        if (!this.street || this.street == 'null') {
          this.errors.push('restorant name required.');
          this.street = null
        }
        if (!this.street_number || this.street_number == 'null') {
          this.errors.push('restorant name required.');
          this.street_number = null
        }
        if (!this.postal_code || this.postal_code == 'null') {
          this.errors.push('restorant name required.');
          this.postal_code = null
        }
      },
      InputSanitize() {
        this.city = this.$sanitize(this.city)
        this.street= this.$sanitize(this.street)
        this.street_number= this.$sanitize(this.street_number)
        this.postal_code =  this.$sanitize(this.postal_code)

      },
      async SignIn() {
        await this.$axios.$put('http://localhost:3333/address/'+this.address_type, {
          address_city : this.city,
          address_street: this.street,
          address_street_number : this.street_number,
          address_postal_code : this.postal_code
        }).then(function (response) {
          console.log(response)
        }).catch(error => {
            consol.log(error.response)
        })

      }

      }


  }

</script>
