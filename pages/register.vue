<template>
  <v-container>
      <h1>Login</h1>

      <UserAuthForm :buttonText="Login" :submitForm="registerUser" :hasName="true"/>
  </v-container>
</template>

<script>
import UserAuthForm from '~/components/UserAuthForm.vue'
export default {
  components: { UserAuthForm },
  methods:{
      loginUser(loginInfo){
          alert('you pressed a button')
      }
  }
}
</script>

<style>

</style>