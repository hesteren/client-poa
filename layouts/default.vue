<template>
  <v-app>
    <v-app-bar app class="header">
      <v-img src="/logo.png" max-width="120" max-height="70"></v-img>

      <v-spacer></v-spacer>

      <v-btn to="/" color="#fff" text>Home</v-btn>
      <v-btn to="/events" class="ml-4" color="#fff" text>Events</v-btn>
    </v-app-bar>

    <v-main class="white">
      <Nuxt class="white"></Nuxt>
    </v-main>

    <v-footer class="footer">© 2022 - Kalipo B.V.</v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
