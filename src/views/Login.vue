<template>
  <div class="login">
    <div class="login-title">
      Log in with EdgeKit
    </div>
    <form @submit.prevent="test">
      <input type="text">
      <input type="text">
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import {required, email, minLength} from "vuelidate/lib/validators"

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null
    }
  },
  validations: {
    email: {required, email},
    password: {required, minLength: minLength(6)},
  },
  methods: {
    login() {
      console.log('submit')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors';
@import '@/styles/text-sizes';
.login {
  margin-top: 80px;
  margin-left: 328px;

  &-title{
    color: $clr-typo-titles;
    font-size: $h2-max_font-size;
    line-height: $h2-max_line-height;
    max-width: 290px;
  }
}
</style>
