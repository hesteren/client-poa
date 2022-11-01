<template>
  <v-container  class="d-flex fill-height justify-center align-center">
    <v-row>
      <v-col cols="5" id="info-event">

        <div>
          <h1>{{ event.title }}</h1>
          <p class=font-size-1>{{ event.description }}</p>

          <ul class="font-size-1 font-weight-bold">
            <li v-if="event.startDate != null">Startdate: {{ event.startDate }}</li>
            <li v-if="event.startTime != null">Starttime: {{ event.startTime }}</li>
            <li v-if="event.endDate != null">Enddate: {{ event.endDate }}</li>
            <li v-if="event.endTime != null">Endtime: {{ event.endTime }}</li>

            <li v-if="event.location != null">Location: {{ event.location }}</li>
            <li v-if="event.capacity != null">Capacity: {{ event.capacity }}</li>
            <li v-if="event.price != null">Price: €{{ event.price }}</li>
            <li v-else>Price: Free</li>

            <li v-for="data in event.customData" :key="data.id">{{ data.key }}: {{ data.value }}</li>
          </ul>
        </div>
      </v-col>

      <v-col cols="7">

        <v-img
          class="mt-16"
          id="event-image"
          src="/DAO_article.png"
          max-width="1000"
          max-length="1000"
        >
        </v-img>

      </v-col>

    </v-row>


    <v-row>
      <h2 class="ml-3 text-h2">Attendees</h2>

      <v-container>
        <v-row>
          <v-col
            cols="3"
            md="3"
            v-for="attendee in event.attendees"
            :key="attendee.id"
          >
            <AttendeeCard :attendee="attendee"></AttendeeCard>
          </v-col>
        </v-row>
      </v-container>

    </v-row>
  </v-container>

</template>
<script>
import AttendeeCard from "~/components/AttendeeCard.vue";

export default {
  name: "Event",
  data() {
    return {
      event: {},
    };
  },
  mounted() {
    this.event = this.$store.state.events.events.find(
      (event) => event.id === parseInt(this.$route.params.event)
    );
  },
  components: {AttendeeCard},
};
</script>
<style scoped>

#info-event {
  margin-top: 12vh;
}

h1 {
  font-size: 3rem;
}

.font-size-1 {
  font-size: 1rem;
}
</style>
