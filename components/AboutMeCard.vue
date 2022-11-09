<template>

  <v-card class="mt-4" max-width="500">
    <v-card-title>About me</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
     {{this.user.about}}
    </v-card-text>

  </v-card>

</template>

<script>
export default {
  name: "AboutMeCard",
  props: {
    user: Object,
  },
}
</script>

<style scoped>

</style>
