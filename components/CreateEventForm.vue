<template>
  <v-card>
    <!-- <div>
      <v-card-title left>Create a new event</v-card-title>
      <v-btn to="/events"></v-btn>
    </div> -->
    <v-container>
      <v-row class="justify-end">
        <v-col>
          <h3>Create a new event</h3>
        </v-col>
        <v-col class="text-right">
          <v-btn to="/events"><v-icon>mdi-window-close</v-icon></v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-form>
      <v-card v-if="step == 1">
        <v-card-title>Event title and description</v-card-title>
        <v-card-text>Choose a unique title people will remember!</v-card-text>
        <div>
          <input
            id="event-title-input"
            v-model="event.title"
            class="pl-4"
            type="text"
            placeholder="Event title"
            maxlength="30"
          />
          <small>{{ this.event.title.length }} / 30</small>
        </div>
        <v-card-text
          >Please write down a description about this new event! Make this
          interesting for potential attendees.</v-card-text
        >
        <input
          v-model="event.description"
          class="pl-4"
          type="text"
          placeholder="Event description"
          maxlength="300"
        />
        <small>{{ this.event.description.length }} / 300</small>
        <v-divider></v-divider>
      </v-card>

      <v-card v-if="step == 2">
        <!-- <v-card-title>Event description</v-card-title>
        <v-card-text
          >Please write down a description about this new event! Make this
          interesting for potential attendees.</v-card-text
        >
        <input
          v-model="event.description"
          class="pl-4"
          type="text"
          placeholder="Event description"
        />
        <v-divider></v-divider> -->
      </v-card>

      <!-- next steps here -->

      <v-card>
        <v-card-actions>
          <v-btn v-if="step != 1" @click="previousStep"
            ><v-icon>mdi-arrow-left-thin</v-icon></v-btn
          >
          <v-spacer></v-spacer>
          <v-btn v-if="step != steps" @click="nextStep"
            ><v-icon> mdi-arrow-right-thin </v-icon></v-btn
          >

          <v-btn v-if="step == 5" @click="createEvent"
            >Sign &nbsp; <v-icon>mdi-draw</v-icon></v-btn
          >
        </v-card-actions>
      </v-card>
    </v-form>
  </v-card>
</template>
<script>
export default {
  name: "CreateEventForm",
  data() {
    return {
      step: 1,
      steps: 5,
      event: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    nextStep() {
      // if (this.step == 1) {
      //   if (!this.event.title) {
      //     return false;
      //   }
      // }

      //TODO: no next step when data is empty

      this.step++;
    },
    previousStep() {
      this.step--;
    },
    createEvent() {
      alert("created");
    },
  },
};
</script>
<style></style>
