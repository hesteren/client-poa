<template>
  <v-app dark>
    <v-app-bar app>
      <v-img src="/logo.png"
      max-width="120"
      max-height="70"></v-img>

      <v-spacer></v-spacer>

      <v-btn to="/">Home</v-btn>
      <v-btn to="/events">Events</v-btn>
    </v-app-bar>

    <v-main id="main">
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

<style>
#main {
  font-family: Century Gothic;

}
</style>