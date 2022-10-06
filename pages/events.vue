<template lang="">
  <div>
    <v-container>
      <v-row>
        <v-col
          cols="6"
          md="4"
          v-for="event in this.$store.state.events.events"
          :key="event.id"
        >
          <EventCard :event="event"></EventCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import EventCard from "~/components/EventCard.vue";

export default {
  name: "Events",
  components: {
    EventCard,
  },
};
</script>
<style lang=""></style>
