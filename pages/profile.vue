<template>
  <section class="md:ml-48 md:mt-24 mb-24">
    <h2 class="text-3xl font-medium">
      Mon Profil :
    </h2>
    <div class="flex flex-wrap space-x-8">
      <div class="w-full max-w-lg md:border-2 md:rounded-md md:p-4 mt-4	md:shadow-lg ">
        <div class="mb-4 text-lg font-medium" >About</div>
        <div class="w-full  px-3 mb-6 md:mb-0 flex flex-inline items-center justify-items-stretch">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold  mr-4" for="first_name">
            Prénom
          </label>
          <input class="appearance-none border border-gray-200 block w-full rounded py-3 px-4 mb-3  focus:outline-none focus:bg-white"
            id="first_name" type="text" :disabled="first_name_state==false" v-model="first_name">
          <button class="ml-4 mb-1" v-on:click="first_name_state=!first_name_state">
            <font-awesome-icon :icon="['fas', 'pencil-alt']" />
          </button>
        </div>
        <div class="w-full  px-3 mb-6 md:mb-0 flex flex-inline items-center">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-4" for="first_name">
            Nom
          </label>
          <input
            class="appearance-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="last_name" type="text" :disabled="last_name_state==false" v-model="last_name">
          <button class="ml-4 mb-1" v-on:click="last_name_state=!last_name_state">
            <font-awesome-icon :icon="['fas', 'pencil-alt']" />
          </button>
        </div>
        <div class="w-full  px-3 mb-6 md:mb-0 flex flex-inline items-center">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-4" for="first_name">
            email
          </label>
          <input
            class="appearance-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="last_name" type="text" :disabled="email_sate==false" v-model="email">
          <button class="ml-4 mb-1" v-on:click="email_sate=!email_sate">
            <font-awesome-icon :icon="['fas', 'pencil-alt']" />
          </button>
        </div>

        <div class="w-full  px-3 mb-6 md:mb-0 flex flex-inline items-center">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold  mr-4" for="first_name">
            Mot de passe
          </label>
          <input
            class="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="password" type="text" :disabled="password_state==false" v-model="password">
          <button class="ml-4 mb-1" v-on:click="password_state=!password_state">
            <font-awesome-icon :icon="['fas', 'pencil-alt']" />
          </button>
        </div>
        <div class="w-full  px-3 mb-6 md:mb-0 flex flex-inline items-center">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold  mr-4" for="first_name">
            Telephone
          </label>
          <input
            class="appearance-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="phone_number" type="text" :disabled="phone_number_state==false" v-model="phone_number">
          <button class="ml-4 mb-1" v-on:click="phone_number_state=!phone_number_state">
            <font-awesome-icon :icon="['fas', 'pencil-alt']" />
          </button>
        </div>
        <div class="flex justify-end items-center">
          <button class="ml-4 mb-1 mr-2 border rounded p-2 bg-green-200" v-on:click="state=!state">
            Enregistrer
          </button>
        </div>
      </div>
        <address-form class="pr-4" :BoxName="payment" />
        <address-form class="pr-4" :BoxName="delivery" />
        <address-form class="pr-4" :BoxName="adresse"/>
        <credit-card-form class="pr-4" />
    </div>
  </section>
</template>

<script>
  //import { mapGetters } from 'vuex'
  import AddressForm from '~/components/forms/AddressForm.vue'
  import CreditCardForm from '~/components/forms/CreditCardForm.vue'


  export default {
    layout: 'default',
    components: {
      AddressForm,
      CreditCardForm
    },
    computed: {
      //...mapGetters(['loggedInUser'])
    },
    data() {
      return {
        first_name: "test",
        last_name: "bij",
        password: "****",
        email:'baba@babou.fr',
        email_taken:null,
        phone_number: "0123456789",
        first_name_state: false,
        last_name_state: false,
        password_state: false,
        phone_number_state: false,
        email_sate:false,
        payment: 'Adresse de paiement',
        delivery:'Adresse de livraison',
        adresse : 'Adresse'
      }
    },
    methods: {
      checkForm(event) {
        console.log('checking form')
        this.email_taken=false
        this.errors = []
        this.phone_number_error = null
        this.InputSanitize();
        this.checkInput()
        event.preventDefault();
        if (!this.errors.length) {
            this.SignIn(this)
            return true;
        }

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
        if (!this.email || this.email=='null') {
          this.errors.push('email required.');
          this.email=null
            }
        if (!this.validEmail(this.email)){
            this.errors.push('enter a valid email.')
            this.email_error = ('votre adresse email est invalide regardez bien le model :)')
            }
        if (!this.validPhone(this.phone_number)){
            this.errors.push('enter a valid phone number.')
            this.phone_number_error = 'Numéro invalide il ne doit être composé que de chiffre et en comporter 10'
            }
        if(!this.phone_number  || this.phone_number=='null'){
              this.errors.push('credit card numbers required')
              this.phone_number=null
          }
    },

    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPhone: function (phone_number) {
      let test = this.OnlyNumber(phone_number)
      if(test ==true && phone_number.length ==10){
        return true
      }else{
        return false
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
      await this.$axios.$put('http://20.74.18.246/service_users/user',{
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
