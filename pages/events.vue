<template lang="">
  <div>
    <v-container>
      <v-flex d-flex>
        <v-layout wrap>
          <v-flex
            md4
            v-for="event in this.$store.state.events.events"
            :key="event.id"
          >
            <EventCard :event="event"></EventCard>
          </v-flex>
        </v-layout>
      </v-flex>
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
