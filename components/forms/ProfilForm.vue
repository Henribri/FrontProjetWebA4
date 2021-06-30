<template>
  <section class="md:ml-48 md:mt-48">
       <h2 class="text-3xl font-medium">
        Mon Profil :
      </h2>
    <div class="flex flex-wrap space-x-8">
      <div class="w-full max-w-lg md:border-2 md:rounded-md md:p-4 mt-4	md:shadow-lg ">
          <div>About</div>
        <div class="w-full  px-3 mb-6 md:mb-0 flex flex-inline items-center justify-items-stretch">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold  mr-4" for="first_name">
            Prénom
          </label>
          <input
            class="appearance-none block w-full rounded py-3 px-4 mb-3  focus:outline-none focus:bg-white"
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
            class="appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="last_name" type="text" :disabled="last_name_state==false" v-model="last_name">
            <button class="ml-4 mb-1" v-on:click="last_name_state=!last_name_state">
                <font-awesome-icon :icon="['fas', 'pencil-alt']" />
            </button>
        </div>
        <div class="w-full  px-3 mb-6 md:mb-0 flex flex-inline items-center">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold  mr-4" for="first_name">
            Mot de passe
          </label>
          <input
            class="appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
            class="appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="phone_number" type="text" :disabled="phone_number_state==false" v-model="phone_number">
            <button class="ml-4 mb-1" v-on:click="phone_number_state=!phone_number_state">
                <font-awesome-icon :icon="['fas', 'pencil-alt']" />
            </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  //import { mapGetters } from 'vuex'

  export default {
    layout: 'default',
    computed: {
      //...mapGetters(['loggedInUser'])
    },
    data() {
      return {
        first_name: "test",
        last_name:"bij",
        password:"****",
        phone_number:"0123456789",
        first_name_state: false,
        last_name_state:false,
        password_state:false,
        phone_number_state:false,
      }
    },
    methods: {
        Modify(state){
            state = !state
        }
    },
  }

</script>
