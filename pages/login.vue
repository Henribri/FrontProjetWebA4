<template>
  <v-container>
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
          }).then((resp) => {
          this.SET_IS_AUTH(true)
          this.$auth.fetchUser()
        }).catch(() => {
          console.log('error')
        })
      }
  }
}
</script>

<style>

</style>