<template>
  <v-card>
    <v-card-title>Create a new event</v-card-title>
    <v-form>
      <v-card v-if="step == 1">
        <v-card-title>Event title</v-card-title>
        <v-card-text>Choose a unique title people will remember!</v-card-text>
        <input
          v-model="event.title"
          class="pl-4"
          type="text"
          placeholder="Event title"
        />
        <v-divider></v-divider>
      </v-card>

      <v-card v-if="step == 2">
        <v-card-title>Event description</v-card-title>
        <v-card-text
          >Please write down a description about this new event! Make this
          interesting for potential attendees.</v-card-text
        >
        <input
          v-model="event.description"
          class="pl-4"
          type="text"
          placeholder="Event title"
        />
        <v-divider></v-divider>
      </v-card>

      <!-- next steps here -->

      <v-card>
        <v-card-actions>
          <v-btn v-if="step != 1" @click="previousStep">Previous</v-btn>
          <v-spacer></v-spacer>
          <v-btn v-if="step != steps" @click="nextStep">Next</v-btn>

          <v-btn v-if="step == 5" @click="createEvent">Create new event</v-btn>
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
