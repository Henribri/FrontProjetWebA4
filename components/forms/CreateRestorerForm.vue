<template>
  <form class="w-full max-w-lg md:border-2 md:rounded-md md:p-4	md:shadow-lg">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="first_name">
          Prénom
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="first_name" type="text" placeholder="Jane" v-model="first_name">
        <p v-if="first_name==null" class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="last_name">
          Nom
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="last_name" type="text" placeholder="Doe"  v-model="last_name">
          <p v-if="last_name==null" class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">
          Mot de passe
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="password" type="password" placeholder="******************"  v-model="password">
        <p class="text-gray-600 text-xs italic">Votre mot de passe doit compter au moins 8 caractères</p>
        <p v-if="password==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
        <p v-if="password_error!=null" class="text-red-500 text-xs italic">{{ password_error }}</p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
          email
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="email" type="email" placeholder="jaifaim@manger.com" v-model="email">
          <p v-if="email==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
          <p v-if="email_taken==true" class="text-red-500 text-xs italic">Cette adresse email est déjà prise</p>
          <p v-if="email_error!=null" class="text-red-500 text-xs italic">{{ email_error }}</p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
          Nom du restaurant
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="restorant_name" type="text" placeholder="jaifaim@manger.com" v-model="restorant_name">
          <p v-if="restorant_name==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
      <div class="w-full mt-2 md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="last_name">
          Numéro de telephone
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="phone_number" type="text" placeholder="06 10 20 30 40"  v-model="phone_number">
          <p v-if="phone_number==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
          <p v-if="phone_number_error!=null" class="text-red-500 text-xs italic">{{ phone_number_error }}</p>
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="city">
          Ville
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="city" type="text" placeholder="Arras"  v-model="city">
          <p v-if="city==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="street">
          Rue
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="street" type="text" placeholder="Pompidou"  v-model="street">
          <p v-if="street==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="street_number">
          Numéro
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="street_number" type="text" placeholder="5" v-model="street_number">
          <p v-if="street_number==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
      <div class="w-full mt-1 md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="postal_code">
          Code Postal
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="postal_code" type="text" placeholder="90210" v-model="postal_code">
          <p v-if="postal_code==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
    </div>
    <p class="flex justify-end">
      <button type="submit" value="submit" class="rounded bg-green-200 p-2 " @click="checkForm">Sign In</button>
    </p>
  </form>


</template>

<script>


  export default {
    name: 'CreateRestorerForm',
    data() {
      return {
        errors: [],
        first_name: null,
        last_name: null,
        password: null,
        email: null,
        restorant_name:null,
        city: null,
        street: null,
        street_number: null,
        postal_code: null,
        email_taken:false,
        phone_number:null,
        phone_number_error:null,
        email_error : null,
        password_error:null
      }
    },
    methods: {
      checkForm(event) {
        console.log('checking form')
        this.email_taken=false
        this.errors = []
        this.phone_number_error = null
        this.email_error = null
        this.InputSanitize()
        this.checkInput()
        event.preventDefault();
        if (!this.errors.length) {
          this.SignIn(this)
          this.$router.back()
          return true;
        }
        console.log(this.password)

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
          if(this.password.length <= 8){
            this.password_error="votre mot de passe n'est pas assez long"
            this.errors.push('password not long enough');
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
        if(!this.restorant_name  || this.restorant_name=='null'){
              this.errors.push('restorant name required')
              this.restorant_name=null
          }
        if (!this.city|| this.city=='null') {
            this.errors.push('delivery city name required.');
            this.city=null
            }
        if (!this.street|| this.street=='null') {
            this.errors.push('delivery treet name required.');
            this.street=null
            }
        if (!this.street_number|| this.street_number=='null') {
            this.errors.push(' delivery street number required.');
            this.street_number=null
            }
        if (!this.postal_code|| this.postal_code=='null') {
            this.errors.push(' delivery postal code required.');
            this.postal_code=null
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
        this.city = this.$sanitize(this.city)
        this.street = this.$sanitize(this.street)
        this.street_number = this.$sanitize(this.street_number)
        this.postal_code = this.$sanitize(this.postal_code)
        this.restorant_name = this.$sanitize(this.restorant_name)

    },
    async SignIn(){
      await this.$axios.$post('http://20.74.18.246/service_users/user/restorer',{
          user_firstname: this.first_name,
          user_lastname: this.last_name,
          user_email: this.email,
          user_password: this.password,
          user_phone_number: this.phone_number,
          restorer_name: this.restorant_name,
          restorer_address_city: this.city,
          restorer_address_street: this.street,
          restorer_address_street_number: this.street_number,
          restorer_address_postal_code: this.postal_code,
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
