<template>
  <v-card max-width="300" elevation="0" >
    <v-container>
      <v-row>
        <v-col cols="6" md="3" >
          <v-avatar color="primary" height="60" width="60" >
              <span class="white--text text-h3">{{
                  user.name.slice(0, 2).toUpperCase()
                }}</span>
          </v-avatar>
        </v-col>

        <v-col cols="6" md="6" class="pl-2">
          <v-card-title class="pa-0" id="name">{{ user.name }}</v-card-title>
          <v-card-text class="pa-0" id="name">@{{ user.username }}</v-card-text>
          <v-card-text class="pa-0 green--text" id="description">
          <v-icon color="green" small >mdi-circle-slice-8</v-icon> Online</v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: Object,
  },
}
</script>

<style scoped>

</style>
