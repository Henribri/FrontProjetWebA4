<template>
  <section class="md:ml-48 md:mt-24 mb-24">
    <h2 class="text-3xl font-medium">
      Mon Profil :
    </h2>
    <div class="flex flex-wrap space-x-4 md:ml-24">
      <div class="w-full max-w-lg md:border-2 md:rounded-md md:p-4 mt-4	md:shadow-lg ">
        <div class="mb-4 text-lg font-medium">A propos</div>
        <div class="w-full  px-3 mb-6 md:mb-0 flex flex-inline items-center justify-items-stretch">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold  mr-4" for="first_name">
            Prénom
          </label>
          <input
            class="border-2 border-solid border-gray-200 bg-gray-100 block w-full rounded py-3 px-4 mb-3  focus:outline-none focus:bg-white"
            id="first_name" type="text" :disabled="first_name_state==false" v-model="first_name">
          <button class="ml-4 mb-1 bg-gray-200 p-1 rounded" v-on:click="first_name_state=!first_name_state">
            <font-awesome-icon :icon="['fas', 'pencil-alt']" />
          </button>
        </div>
        <p v-if="first_name==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
        <div class="w-full  px-3 mb-6 md:mb-0 flex flex-inline items-center">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-4" for="first_name">
            Nom
          </label>
          <input
            class="appearance-none block w-full border-2 border-solid bg-gray-100 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="last_name" type="text" :disabled="last_name_state==false" v-model="last_name">
          <button class="ml-4 mb-1 bg-gray-200 p-1 rounded" v-on:click="last_name_state=!last_name_state">
            <font-awesome-icon :icon="['fas', 'pencil-alt']" />
          </button>
        </div>
        <p v-if="last_name==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
        <div class="w-full  px-3 mb-6 md:mb-0 flex flex-inline items-center">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-4" for="first_name">
            email
          </label>
          <input
            class="appearance-none block w-full border-2 border-solid border-gray-200  bg-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="email" type="text" :disabled="email_sate==false" v-model="email">
          <button class="ml-4 mb-1 bg-gray-200 p-1 rounded" v-on:click="email_sate=!email_sate">
            <font-awesome-icon :icon="['fas', 'pencil-alt']" />
          </button>
          <p v-if="email_taken==true" class="text-red-500 text-xs italic">Cette adresse email est déjà prise</p>
          <p v-if="email==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
          <p v-if="email_error!=null" class="text-red-500 text-xs italic">{{ email_error }}</p>
        </div>
        <div class="w-full  px-3 mb-6 md:mb-0 flex flex-inline items-center">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold  mr-4" for="first_name">
            Telephone
          </label>
          <input
            class="appearance-none block w-full border-2 border-solid border-gray-200 rounded  bg-gray-100 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="phone_number" type="text" :disabled="phone_number_state==false" v-model="phone_number">
          <button class="ml-4 mb-1  bg-gray-200 p-1 rounded" v-on:click="phone_number_state=!phone_number_state">
            <font-awesome-icon :icon="['fas', 'pencil-alt']" />
          </button>
        </div>
        <p v-if="phone_number_error!=null" class="text-red-500 text-xs italic">{{ phone_number_error }}</p>
        <p v-if="phone_number==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
        <div class="flex justify-end items-center">
          <button class="ml-4 mb-1 mr-2 border rounded p-2 bg-green-200" @click="checkForm">
            Enregistrer
          </button>
        </div>
      </div>
      <address-form v-if="role=='client'" class="pr-4" :BoxName="payment"
        :address_id="this.$auth.user.fk_payment_address_id" :address_type="'payment'"  :DisplayModifier="true" />
      <address-form v-if="role=='client'" class="pr-4" :BoxName="delivery"
        :address_id="this.$auth.user.fk_delivery_address_id" :address_type="'delivery'" :DisplayModifier="true" />
      <credit-card-form v-if="role=='client'" class="pr-4" />
      <restorer-form v-if="role=='restorer'" :restorer_id="restorer_id" />
    </div>

    <div class="w-full md:w-1/2 ml-4 md:ml-24 mt-10 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="first_name">
          Parrainez vos amis !
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="filleul" type="text" placeholder="ami@friend.com" v-model="filleul">

        <button @click="sponsorCheck" class="text-lg text-white w-32 font-medium bg-green-500 border-solid border-2 p-2 rounded">
        Parrainer
      </button>
      <p v-if="sponsor_error!=null" class="text-red-500 text-xs italic">{{ sponsor_error }}</p>
      </div>

    <div class="flex flex-wrap ml-4 md:ml-24 mt-10">
      <button @click="DeleteWanted=true" class="text-lg text-white w-32 font-medium bg-red-500 border-solid border-2 p-2 rounded">
        supprimer le compte
      </button>
      </div>
      <div class="flex flex-col ml-4 md:ml-24 mt-4 md:w-96 w-48">
        <div v-if="DeleteWanted" class="text-white font-medium bg-yellow-300 border-2 border-solid border-red-200 rounded ">Vous êtes sûr ? Après validation vous ne pourrez plus faire marche arrière
          <div class="flex flex-inline justify-center mt-2">
          <button @click="DeleteAccount" class=" mr-2 text-white bg-green-500 rounded p-1 " v-if="DeleteWanted">
            oui
          </button>
          <button @click="DeleteWanted=false" class=" text-white bg-red-500 rounded p-1 " v-if="DeleteWanted">
            non
          </button>
        </div>
        </div>

      </div>
  </section>
</template>

<script>
  //import { mapGetters } from 'vuex'
  import AddressForm from '~/components/forms/AddressForm.vue'
  import CreditCardForm from '~/components/forms/CreditCardForm.vue'
  import RestorerForm from '~/components/forms/RestorerForm.vue'


  export default {
    layout: 'default',
    components: {
      AddressForm,
      CreditCardForm,
      RestorerForm
    },
    computed: {

      //...mapGetters(['loggedInUser'])
    },
    beforeMount() {
      this.first_name = this.$auth.user.user_firstname
      this.last_name = this.$auth.user.user_lastname
      this.email = this.$auth.user.user_email
      this.phone_number = this.$auth.user.user_phone_number
      this.password = this.$auth.user.password
      this.restorer_id = this.$auth.user.fk_restorer_id
      this.CheckRole()
    },
    data() {
      return {
        errors:[],
        first_name: null,
        last_name: null,
        password: null,
        email: null,
        email_taken: null,
        phone_number: null,
        first_name_state: false,
        last_name_state: false,
        password_state: false,
        phone_number_state: false,
        email_sate: false,
        payment: null,
        delivery: null,
        adresse: null,
        role: undefined,
        restorer_id: null,
        phone_number_error: null,
        DeleteWanted: false,
        sponsor_error:null,
        filleul:null,
        email_error:null,
        password_error:null
      }
    },
    methods: {
      checkForm(event) {
        console.log('checking form')
        this.email_taken = false
        this.errors = []
        this.phone_number_error = null
        this.password_error =null
        this.email_error =null
        this.InputSanitize();
        this.checkInput()
        event.preventDefault();
        if (!this.errors.length) {
          this.SignIn()
          return true;
        }

      },
      CheckRole() {
        console.log(this.$auth.user.fk_role_id)
        if (this.$auth.user.fk_role_id == 1) {
          this.role = 'client'
        } else if (this.$auth.user.fk_role_id == 2) {
          this.role = 'delivery'
        } else {
          this.role = 'restorer'
        }
      },
      checkInput() {
        if (!this.first_name || this.first_name == 'null') {
          this.errors.push('firstname required.');
          this.first_name = null
        }
        if (!this.last_name || this.last_name == 'null') {
          this.errors.push('lastname required.');
          this.last_name = null
        }
        if (!this.password || this.password == 'null') {
          this.errors.push('password required.');
          this.password = null
        }
        if(this.password!=null){
          if(this.password.length < 8){
            this.password_error="votre mot de passe n'est pas assez long"
            this.errors.push('password not long enough');
          }
        }
        if (!this.email || this.email == 'null') {
          this.errors.push('email required.');
          this.email = null
        }
        if (!this.validEmail(this.email)) {
          this.errors.push('enter a valid email.')
          this.email_error = ('votre adresse email est invalide regardez bien le model :)')
        }
        if (!this.validPhone(this.phone_number)) {
          this.errors.push('enter a valid phone number.')
          this.phone_number_error = 'Numéro de téléphone invalide il ne doit être composé que de chiffre et en comporter 10'
        }
        if (!this.phone_number || this.phone_number == 'null') {
          this.errors.push('credit card numbers required')
          this.phone_number = null
        }
      },
      DeleteAccount(){
        this.DeleteProfil()
        this.$auth.logout()
      },
      sponsorCheck(){
        if (!this.filleul || this.filleul == 'null') {
           this.sponsor_error = ("Veuillez rentrer l'adresse d'un ami")
          this.filleul = null
        }
        else if (!this.validEmail(this.filleul)) {
          this.errors.push('enter a valid email.')
          this.sponsor_error = ('votre adresse email est invalide regardez bien le model :)')
        }else{
          this.sponsor()
        }
      },
      async sponsor(){
        await this.$axios.$put('http://20.74.32.244/ceseat_users/user/support', {
          filleul_email : this.filleul
        })
        .then(function (response) {
          console.log(response)
        }).catch(error => {
          if (error.response.data.code == "friend") {
            this.sponsor_error = 'Votre ami est déjà parrainé ou vous avez saisi la mauvaise adresse'
          }else{
            consol.log('test')
            this.sponsor_error = "Vous avez déjà parrainé quelqu'un"
          }
        })

      },
      async DeleteProfil(){
        await this.$axios.$delete('http://20.74.32.244/ceseat_users/user')
      },
      validEmail: function (email) {
        var re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      validPhone: function (phone_number) {
        let test = this.OnlyNumber(phone_number)
        if (test == true && phone_number.length == 10) {
          return true
        } else {
          return false
        }
      },
      OnlyNumber(input) {
        var re = /^[0-9]+$/;
        return re.test(input)
      },

      InputSanitize() {
        this.first_name = this.$sanitize(this.first_name)
        this.last_name = this.$sanitize(this.last_name)
        this.password = this.$sanitize(this.password)
        this.phone_number = this.$sanitize(this.phone_number)
      },
      async SignIn() {
        await this.$axios.$put('http://20.74.32.244/ceseat_users/user', {
          user_firstname: this.first_name,
          user_lastname: this.last_name,
          user_email: this.email,
          user_password: this.password,
          user_phone_number: this.phone_number,
        }).then(function (response) {
          console.log(response)
        }).catch(error => {
          if (error.response.data.err.number == 2601) {
            this.email_taken = true
            console.log('err')
          } else {
            consol.log(error.response)
          }
        })

      }
    },

  }

</script>
