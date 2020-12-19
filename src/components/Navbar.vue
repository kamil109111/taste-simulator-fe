<template>

  <nav>
    <v-toolbar  flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Taste</span>
        <span class="font-weight-bold">Simulator</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Tutaj trzeba zrobić warunek wyświetlania przycisków do logowani jeśli użytkownik nie jest zalogowany
      albo wylogowania jeśli jest zalogowany -->
        <Login />
        <Register />

      <v-btn text color="grey">
        <span>Wyloguj się</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" temporary color="grey-lighten-4">

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <span class="font-weight-light">TASTE</span>
            <span class="font-weight-bold">SIMULATOR</span>
          </v-list-item-title>
          <v-list-item-subtitle>
            <span class="font-weight-light">menu</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>

        <v-list-item
            v-for="item in items"
            :key="item.title"
            router :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>

    </v-navigation-drawer>


  </nav>

</template>

<script>
import Login from './Login'
import Register from "@/components/Register";
export default {
  components: {
    Login,
    Register
  },
data() {
  return {

      drawer: false,
      items: [
        { title: 'Strona główna', icon: 'mdi-view-dashboard', route: '/' },
        { title: 'Piwa', icon: 'mdi-glass-mug-variant', route: '/Beers' },
        { title: 'Wydarzenia', icon: 'mdi-calendar-multiple', route: '/Events' },
        { title: 'Znajomi', icon: 'mdi-account-group', route: '/Friends' },
        { title: 'About', icon: 'mdi-help-box', route: '../About' },
      ],
    }
  }
}
</script>

<style scoped>

</style>