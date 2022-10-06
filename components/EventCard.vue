<template>
  <div>
    <v-card>
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
      ></v-img>
      <v-card-title>{{ event.title }}</v-card-title>
      <v-card-text>
        <v-row class="mx-0 mb-2">
          <v-rating
            :value="5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-2">5 (413)</div>
        </v-row>
        <div>Organisation: {{ event.organisation }}</div>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-actions>
        <v-btn color="light-blue lighten-2" text :to="`event/${event.id}`"
          >More information</v-btn
        >

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
      </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>{{ event.description }}</v-card-text>
          </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
  data: () => ({
    show: false,
  }),

};
</script>
<style></style>
