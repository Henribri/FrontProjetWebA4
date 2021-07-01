<template>
  <div class="w-full max-w-lg md:border-2 md:rounded-md md:p-4 mt-4	md:shadow-lg ">
    <p class="m-2 font-medium text-xl">Carte de crédit</p>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
          Carte
        </label>
        <div class="relative">
          <select
            class="block appearance-none w-full border-2 border-solid border-gray-200 bg-gray-100 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="credit_card_type"  :disabled="state==false" v-model="credit_card_type">
            <option>Visa</option>
            <option>Mastercard</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
          </div>
        </div>
        <p v-if="credit_card_type==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="street">
          Numéros
        </label>
        <input
          class="appearance-none block w-full  text-gray-700 border border-2 border-solid border-gray-200 bg-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="credit_card_num" type="text" placeholder="**** **** **** ****" :disabled="state==false" v-model="credit_card_num">
        <p v-if="credit_card_num==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
        <p v-if="credit_card_error!=null" class="text-red-500 text-xs italic">{{ credit_card_error }}</p>
      </div>
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

  </div>
</template>

<script>
  //import { mapGetters } from 'vuex'

  export default {
    layout: 'default',
    name: 'CreditCardForm',
    computed: {
      //...mapGetters(['loggedInUser'])
    },
    data() {
      return {
        errors:[],
        creditCard:null,
        credit_card_type:null,
        credit_card_num:null,
        credit_card_error:null,
        state: false,
      }
    },
    beforeMount(){
      this.fetch()
    },
    methods: {
      Modify(state) {
        state = !state
      },
      async fetch(){
         this.creditCard= await this.$axios.$get('http://localhost:3333/creditCard')
         this.credit_card_num = this.creditCard.creditcard.credit_card_num
         this.credit_card_type =this.creditCard.creditcard.credit_card_type

         console.log(this.creditCard.creditcard)
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
        if (!this.credit_card_num || this.credit_card_num == 'null') {
          this.errors.push('restorant name required.');
          this.credit_card_num = null
        }
        if (!this.credit_card_type || this.credit_card_type == 'null') {
          this.errors.push('restorant name required.');
          this.credit_card_type = null
        }if (!this.validCreditCard(this.credit_card_num)){
            this.errors.push('enter valids credit card numbers.')
            this.credit_card_error = 'Numéro de carte invalide, ce champ ne doit comporter que 16 chiffres '
            }
      },
      InputSanitize() {
        this.credit_card_num = this.$sanitize(this.credit_card_num)
        this.credit_card_type= this.$sanitize(this.credit_card_type)
      },
      validCreditCard: function (credit_card_num) {
        let test = this.OnlyNumber(credit_card_num)
        if(test ==true && credit_card_num.length == 16){
          return true
        }else{
          return false
        }
      },
      OnlyNumber(input){
      var re = /^[0-9]+$/;
      return re.test(input)
      },
      async SignIn() {
        await this.$axios.$put('http://localhost:3333/creditCard', {
          credit_card_type: this.credit_card_type,
          credit_card_num : this.credit_card_num

        }).then(function (response) {
          console.log(response)
        }).catch(error => {
            consol.log(error.response)
        })

      }
    },
  }

</script>
