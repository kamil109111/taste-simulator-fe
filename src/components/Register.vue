<template>
<v-dialog max-width="600px" v-model="dialog">

  <template v-slot:activator="{ on, attrs }">
    <v-btn dark color="grey" v-bind="attrs" v-on="on">
      <span>Zarejestruj się</span>
    </v-btn>
  </template>

  <v-card-title class="white">
    <h2>Zarejestruj się</h2>
  </v-card-title>

</v-dialog>
</template>

<script>
export default {
name: "Register",
  data () {
    return {
      dialog: false,
    }
  }
}
</script>

<style scoped>

</style>