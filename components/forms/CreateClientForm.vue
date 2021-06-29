<template>
  <form class="w-full max-w-lg border-2 rounded-md p-4	shadow-lg">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="first_name">
          Prénom
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="first_name" type="text" placeholder="Jane" v-model="first_name">
        <p v-if="first_name==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait</p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="last_name">
          Nom
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="last_name" type="text" placeholder="Doe"  v-model="last_name">
          <p v-if="last_name==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait</p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">
          mot de passe
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="password" type="password" placeholder="******************"  v-model="password">
        <p class="text-gray-600 text-xs italic">Faites le aussi long et fou que vous voulez</p>
        <p v-if="password==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
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
    <p class="m-2 font-medium text-xl" >Adresse de livraison</p>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="city">
          Ville
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="city" type="text" placeholder="Arras"  v-model="delivery_city">
          <p v-if="delivery_city==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="street">
          Rue
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="street" type="text" placeholder="Pompidou"  v-model="delivery_street">
          <p v-if="delivery_street==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="street_number">
          Numéro
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="street_number" type="text" placeholder="5" v-model="delivery_street_number">
          <p v-if="delivery_street_number==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
      <div class="w-full mt-1 md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="postal_code">
          Code Postal
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="postal_code" type="text" placeholder="90210" v-model="delivery_postal_code">
          <p v-if="delivery_postal_code==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
    </div>
    <p class="m-2 font-medium text-xl ">Adresse de paiement</p>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="city">
          Ville
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="payment_city" type="text" placeholder="Arras"  v-model="payment_city">
          <p v-if="payment_city==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="street">
          Rue
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="payment_street" type="text" placeholder="Pompidou"  v-model="payment_street">
          <p v-if="payment_street==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="street_number">
          Numéro
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="payment_street_number" type="text" placeholder="5" v-model="payment_street_number">
          <p v-if="payment_street_number==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
      <div class="w-full mt-1 md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="postal_code">
          Code Postal
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="payment_postal_code" type="text" placeholder="90210" v-model="payment_postal_code">
          <p v-if="payment_postal_code==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
      </div>
    </div>
    <p class="m-2 font-medium text-xl" >Carte de crédit</p>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Carte
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="credit_card_type" v-model="credit_card_type">
          <option>Visa</option>
          <option>Mastercard</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      <p v-if="credit_card_type==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
    </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="street">
          Numéros
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="credit_card_num" type="text" placeholder="**** **** **** ****"  v-model="credit_card_num">
          <p v-if="credit_card_num==null" class="text-red-500 text-xs italic">Remplissez ce champs s'il vous plait.</p>
          <p v-if="credit_card_error!=null" class="text-red-500 text-xs italic">{{ credit_card_error }}</p>
      </div>
    </div>
    <p class="flex justify-end">
      <button type="submit" value="submit" class="rounded bg-green-200 p-2 " @click="checkForm">Sign In</button>
    </p>
  </form>


</template>

<script>

  export default {
    name: 'CreateClientForm',
    data() {
      return {
        errors: [],
        first_name: null,
        last_name: null,
        password: null,
        email: null,
        delivery_city: null,
        delivery_street: null,
        delivery_street_number: null,
        delivery_postal_code: null,
        payment_city: null,
        payment_street: null,
        payment_street_number: null,
        payment_postal_code: null,
        credit_card_type:null,
        credit_card_num:null,
        email_taken:false,
        phone_number:null,
        credit_card_error:null,
        phone_number_error:null
      }
    },
    methods: {
      checkForm(event) {
        console.log('checking form')
        this.email_taken=false
        this.errors = []
        this.phone_number_error = null
        this.credit_card_error = null
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
        if (!this.validCreditCard(this.credit_card_num)){
            this.errors.push('enter valids credit card numbers.')
            this.credit_card_error = 'Numéro de carte invalide, ce champ ne doit comporter que 16 chiffres '
            }
        if (!this.delivery_city|| this.delivery_city=='null') {
            this.errors.push('delivery city name required.');
            this.delivery_city=null
            }
        if (!this.delivery_street|| this.delivery_street=='null') {
            this.errors.push('delivery treet name required.');
            this.delivery_street=null
            }
        if (!this.delivery_street_number|| this.delivery_street_number=='null') {
            this.errors.push(' delivery street number required.');
            this.delivery_street_number=null
            }
        if (!this.delivery_postal_code|| this.delivery_postal_code=='null') {
            this.errors.push(' delivery postal code required.');
            this.delivery_postal_code=null
          }
        if (!this.payment_city|| this.payment_city=='null') {
            this.errors.push('payment city name required.');
            this.payment_city=null
            }
        if (!this.payment_street|| this.payment_street=='null') {
            this.errors.push(' payment street name required.');
            this.payment_street=null
            }
        if (!this.payment_street_number|| this.payment_street_number=='null') {
            this.errors.push(' payment street number required.');
            this.payment_street_number=null
            }
        if (!this.payment_postal_code|| this.payment_postal_code=='null') {
            this.errors.push(' payment postal code required.');
            this.payment_postal_code=null
          }
        if(!this.credit_card_type|| this.credit_card_type=='null'){
            this.errors.push('credit card type required')
            this.credit_card_type=null
          }
        if(!this.credit_card_num|| this.credit_card_num=='null'){
            this.errors.push('credit card numbers required')
             this.credit_card_num=null
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

    OnlyChar(input){
      var re = /^[a-zA-Z]+$/;
      return re.test(input)
    },
    InputSanitize(){
        this.first_name = this.$sanitize(this.first_name)
        this.last_name = this.$sanitize(this.last_name)
        this.password = this.$sanitize(this.password)
        this.delivery_city = this.$sanitize(this.delivery_city)
        this.delivery_street = this.$sanitize(this.delivery_street)
        this.delivery_street_number = this.$sanitize(this.delivery_street_number)
        this.delivery_postal_code = this.$sanitize(this.delivery_postal_code)
        this.payment_city = this.$sanitize(this.payment_city)
        this.payment_street = this.$sanitize(this.payment_street)
        this.payment_street_number = this.$sanitize(this.payment_street_number)
        this.payment_postal_code = this.$sanitize(this.payment_postal_code)
        this.credit_card_type= this.$sanitize(this.credit_card_type)
        this.credit_card_num = this.$sanitize(this.credit_card_num)
        this.phone_number = this.$sanitize(this.phone_number)
    },
    async SignIn(){
      await this.$axios.$post('http://localhost:3333/user/client',{
          user_firstname: this.first_name,
          user_lastname: this.last_name,
          user_email: this.email,
          user_password: this.password,
          user_phone_number: this.phone_number,
          credit_card_type: this.credit_card_type,
          credit_card_num: this.credit_card_num,
          delivery_address_city: this.delivery_city,
          delivery_address_street: this.delivery_street,
          delivery_address_street_number: this.delivery_street_number,
          delivery_address_postal_code: this.delivery_postal_code,
          payment_address_city: this.payment_city,
          payment_address_street: this.payment_street,
          payment_address_street_number: this.payment_street_number,
          payment_address_postal_code: this.payment_postal_code
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
