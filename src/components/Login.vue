<template>
<v-dialog max-width="600px" v-model="dialog">

  <template v-slot:activator="{ on, attrs }">
    <v-btn  text color="grey" v-bind="attrs" v-on="on">
      <span>Zaloguj się</span>
    </v-btn>
  </template>

  <v-card-title class="white">
    <h2>Zaloguj się</h2>
  </v-card-title>
  <v-form class="white" v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" >

          <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
          ></v-text-field>

        </v-col>
        <v-col cols="12" md="8">
          <v-text-field
              v-model="password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min, rules.emailMatch]"
              :type="show ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show = !show"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="8">
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="dialog = false">
          Zamknij
        </v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Zaloguj się
        </v-btn>
      </v-card-actions>
        </v-col>
    </v-row>
    </v-container>
  </v-form>

</v-dialog>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      dialog: false,
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      show: false,
      password: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
      }
    }
  }
}
</script>

<style scoped>

</style>