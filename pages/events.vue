<template lang="">
  <div>
    <EventCard
      v-for="event in this.$store.state.events.events"
      :event="event"
      :key="event.id"
    ></EventCard>
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
