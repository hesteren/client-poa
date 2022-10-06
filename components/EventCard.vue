<template>
  <div> 
  <v-container
    >
      <v-row
        :align="align"
        no-gutters
      >
        <v-col
          v-for="n in 3"
          class="d-flex child-flex" cols="6" sm="4"
        >
      <v-card class="pa-1 ma-1" max-width="360">
          <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
          ></v-img>
        <v-card-title>{{ event.title }}</v-card-title>
        <v-card-text>
         <v-row
        align="center"
        class="mx-0 mb-2"
      >
        <v-rating
          :value="5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-2">
          5 (413)
        </div>
      </v-row>
        <div>{{ event.description }}</div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
          <v-btn color="light-blue lighten-2"
        text :to="`event/${event.id}`">More information</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    </v-row>
    </v-container>

  </div>
</template>
<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
};
</script>
<style></style>
