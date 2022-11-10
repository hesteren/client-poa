<template lang="">
  <v-container>
    <div class="d-flex justify-end">
      <div>
        <v-text-field
          class="mt-4 mr-3"
          style="width: 250px"
          solo
          v-model="search"
          label="Search an event"
        >
        </v-text-field>
      </div>
    </div>

    <v-container>
      <v-row>
        <v-col sm="6" md="4" v-for="event in filteredEvents" :key="event.id">
          <EventCard class="elevation-1" :event="event"></EventCard>
        </v-col>
      </v-row>
    </v-container>
    <div id="createButton">
      <v-btn
        to="/events/create"
        fab
        dark
        large
        color="primary"
        fixed
        right
        bottom
      >
        <v-icon dark>{{ "mdi-plus" }}</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>
<script>
import EventCard from "~/components/EventCard.vue";

export default {
  name: "Events",
  data() {
    return {
      search: "",
    };
  },
  components: {
    EventCard,
  },
  computed: {
    filteredEvents() {
      return this.$store.state.events.events.filter((event) =>
        event.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>
<style lang=""></style>
