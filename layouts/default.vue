<template>
  <v-app>
    <navigation-bar> </navigation-bar>

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
