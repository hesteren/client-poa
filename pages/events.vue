<template lang="">
  <div>
    <input type="text" v-model="search" />
    <v-container>
      <v-row>
        <v-col cols="6" md="4" v-for="event in filteredEvents" :key="event.id">
          <EventCard class="elevation-1" :event="event"></EventCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
