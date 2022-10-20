<template>
  <div id="the-div">
    <div id="event-info">
      <h1>{{ event.title }}</h1>
      <p id="event-description">{{ event.description }}</p>

      <ul id="info-list">
        <li v-if="event.startDate != ''">Startdate : {{ event.startDate }}</li>
        <li v-if="event.endDate != ''">Enddate : {{ event.endDate }}</li>
        <li v-if="event.location != ''">Location: {{ event.location }}</li>
        <li v-if="event.organisation != ''">
          Organisation: {{ event.organisation }}
        </li>
        <li v-if="event.organizer != ''">Organizer: {{ event.organizer }}</li>
        <li v-if="event.capacity != ''">Capacity: {{ event.capacity }}</li>
      </ul>
    </div>

    <v-img
      id="event-image"
      src="/DAO_article.png"
      max-width="1000"
      max-length="1000"
    >
    </v-img>

    <br />

    <h2 id="attendees-text">Attendees</h2>

    <br />

    <div id="attendees">
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
    </div>
  </div>
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
  components: { AttendeeCard },
};
</script>
<style scoped>
#the-div {
  color: black;
  display: grid;
  grid-template-areas:
    "event-info     event-image"
    "attendees-text   attendees-text"
    "attendees        attendees";
  grid-template-columns: 60vh 200vh;
}

#event-info {
  grid-area: event-info;
}

#event-image {
  grid-area: event-image;
}

#attendees-text {
  grid-area: attendees-text;
}

#attendees {
  grid-area: attendees;
}

#event-info {
  max-width: 80vh;
}

#event-image {
  margin-left: 7vh;
}

#no-attendees-text {
  margin-left: 1vh;
  font-style: italic;
}

#attendees {
  margin-left: 8vh;
  width: max-content;
}

#attendees-text {
  margin-top: 5vh;
  font-size: 2rem;
  margin-left: 10vh;
}

h1 {
  font-size: 3rem;
  margin-left: 10vh;
  margin-top: 15vh;
}

#event-description {
  font-size: 1rem;
  margin-left: 10vh;
  margin-top: 1vh;
}

#event-description {
  font-size: 1rem;
  margin-left: 10vh;
  margin-top: 1vh;
}

#info-list {
  margin-left: 9vh;
  margin-top: 3vh;
  font-size: 1rem;
  font-weight: bold;
}
</style>
