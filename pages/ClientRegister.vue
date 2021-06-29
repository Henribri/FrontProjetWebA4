<template>
  <div>
    <button v-if="!role_selected" @click="GoBack()" class="flex flex-inline items-center lg:ml-48 lg:mt-20 ml-4 mt-4 mb-4">
      <font-awesome-icon :icon="['fas', 'arrow-left']" class="fa-2x mr-4" />
      <div class='font-medium'>Retour</div>
    </button>
    <button v-if="role_selected" @click="ToChoice()" class="flex flex-inline items-center lg:ml-48 lg:mt-20 ml-4 mt-4 mb-4">
      <font-awesome-icon :icon="['fas', 'arrow-left']" class="fa-2x mr-4" />
      <div class='font-medium'>Retour</div>
    </button>
    <div v-if="!role_selected" class="text-xl lg:ml-96 ml-4 lg:m-96 lg:mb-0 lg:mt-4 font-medium ">Vous êtes un :</div>
    <div class="flex justify-center mb-20">
      <div v-if="!role_selected" class="flex flex-col">
        <div class="pl-48 pr-48"></div>
        <button @click="SelectRole('client')" class='border-2 rounded-md p-4  m-4 max-w-xs shadow-lg '>Client fidèle
        </button>
        <button @click="SelectRole('delivery')" class='border-2 rounded-md p-4 m-4 max-w-xs shadow-lg'>Livreur
        </button>
        <button @click="SelectRole('restorer')"
          class='border-2 rounded-md p-4 max-w-xs	shadow-lg m-4'>Restorateur</button>
        <button @click="SelectRole('dev')"
          class='border-2 rounded-md p-4 max-w-xs	shadow-lg m-4'>Développeur</button>
      </div>
      <div v-if="user_type=='client'" class="flex item-center  mt-20 mb-24 p-2 justify-center">
        <CreateClientForm />
      </div>
      <div v-if="user_type=='delivery'" class="flex item-center  mt-20 mb-24 p-2 justify-center">
        <CreateDeliveryForm />
      </div>
      <div v-if="user_type=='restorer'" class="flex item-center  mt-20 mb-24  p-2 justify-center">
        <CreateRestorerForm />
      </div>
      <div v-if="user_type=='dev'" class="flex item-center  mt-20 mb-24  p-2 justify-center">
        <CreateDevForm />
      </div>
    </div>
  </div>



</template>

<script>
  import CreateClientForm from '~/components/forms/CreateClientForm.vue'
  import CreateDeliveryForm from '~/components/forms/CreateDeliveryForm.vue'
  import CreateRestorerForm from '~/components/forms/CreateRestorerForm.vue'
  import CreateDevForm from '~/components/forms/CreateDevForm.vue'

  export default {
    name: 'ClientRegister',
    components: {

      CreateClientForm,
      CreateDeliveryForm,
      CreateRestorerForm,
      CreateDevForm


    },
    data() {
      return {
        user_type: null,
        role_selected: null
      }
    },
    methods: {
      GoBack() {
        this.$router.back()

      },
      ToChoice() {
        this.role_selected = null
        this.user_type = null
      },
      SelectRole(role) {
        this.role_selected = true
        this.user_type = role
        console.log(this.role_selected)
        console.log(this.user_type)
      }
    },
  }

</script>

<style>

</style>
