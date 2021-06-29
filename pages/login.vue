<template>
  <v-container>
      <h1>Login</h1>

      <UserAuthForm buttonText="Login" :submitForm="loginUser"/>
  </v-container>
</template>

<script>
import UserAuthForm from '~/components/UserAuthForm.vue'
export default {
  components: { UserAuthForm },
  methods:{
      loginUser(loginInfo){
          this.$auth.loginWith('local', {
              data: loginInfo
          })
      }
  }
}
</script>

<style>

</style>