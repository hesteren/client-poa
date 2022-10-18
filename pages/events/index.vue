<template lang="">
  <v-container>
    <input
      style="
        border: 1px solid;
        margin-top: 5px;
        margin-left: 10px;
        border-radius: 10px;
        padding: 10px;
      "
      type="text"
      v-model="search"
      placeholder="Search an event"
    />

    <v-container>
      <v-row>
        <v-col cols="6" md="4" v-for="event in filteredEvents" :key="event.id">
          <EventCard class="elevation-1" :event="event"></EventCard>
        </v-col>
      </v-row>
    </v-container>
      <div id="createButton">
         <v-btn to="/events/create" fab dark large color="primary" fixed right bottom>
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
