<template>
  <v-app dark>
    <v-app-bar app>
      <v-app-bar-title>Kalipo</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn to="/">Home</v-btn>
      <v-btn to="/events">Events</v-btn>
    </v-app-bar>

    <v-main>
      <Nuxt></Nuxt>
    </v-main>

    <v-footer></v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
