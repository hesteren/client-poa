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
            required
          />
          <small>{{ this.event.title.length }} / 30</small>
        </div>
        <v-card-text>
          Please write down a description about this new event! Make this
          interesting for potential attendees.
        </v-card-text>
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
        <v-card-title>Event Image</v-card-title>
        <v-card-text>
          Add an image to your event to lure people in! If no image is provided
          , a default image will be used.
        </v-card-text>
        <v-file-input
          truncate-length="100"
          v-model="event.image"
          show-size
          accept="image/*"
          outlined
          prepend-icon="mdi-camera"
          label="Upload an image"
          required
        >
        </v-file-input>
        <v-divider></v-divider>
      </v-card>

      <v-card v-if="step == 3">
        <v-card-title>Event Date's</v-card-title>
        <v-card-text>
          Here you can fill in the date and time of your event!
        </v-card-text>

        <v-container
          class="d-flex flex-column justify-center align-center"
          fluid>

          <v-row>

            <v-col cols="12" sm="8">
              <v-text-field
                type="date"
                v-model="event.startDate"
                label="Start date"
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="4">
              <v-text-field
                type="time"
                v-model="event.startTime"
                label="Start time"
                outlined
              ></v-text-field>
            </v-col>


            <v-col cols="12" sm="8">
              <v-text-field
                type="date"
                v-model="event.endDate"
                label="End date"
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="4">
              <v-text-field
                type="time"
                v-model="event.endTime"
                label="End time"
                outlined
              ></v-text-field>
            </v-col>

          </v-row>

          </v-container>

        <v-divider></v-divider>
      </v-card>


      <v-card v-if="step === 4">

        <v-card-title>Event data</v-card-title>
        <v-card-text>
          Here you can add all the data people need for your event!
        </v-card-text>


        <v-col cols="12" sm="12">
          <v-text-field
            v-model="event.capacity"
            label="Location"
            outlined
            :rules="locationRules"
            maxlength="50"
            counter="50"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="12">
          <v-text-field
            type="number"
            v-model="event.maxAttendees"
            label="Maximum number of attendees"
            required
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="12">
          <v-text-field
            type="number"
            prepend-inner-icon="mdi-currency-eur"
            v-model="event.price"
            label="Price"
            hint="Leave the price empty or at 0 if the event is free"
            persistent-hint
            outlined
          ></v-text-field>
        </v-col>

      </v-card>

      <v-card v-if="step === 5">

        <v-card-title>Custom Event data</v-card-title>
        <v-card-text>
          Here you can add all the extra data your event needs!
        </v-card-text>

        <v-container>

          <v-row v-for="count in this.customDataCount" :key="count">

            <v-col cols="12" sm="5">
              <v-text-field
                label="Key"
                outlined
                maxlength="30"
                counter="30"
                hint="The key of the custom data, e.x. 'Duration'"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="5">
              <v-text-field
                label="Value"
                outlined
                maxlength="30"
                counter="30"
                hint="The value of the custom data, e.x. '2 hours'"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="1">

            </v-col>

          </v-row>

          <v-btn
            class="mx-2"
            fab
            dark
            color="indigo"
            @click="addCustomData"
          >
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>

        </v-container>

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

          <v-btn v-if="step == steps" @click="createEvent"
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
      steps: 6,
      customDataCount: 1,
      event: {
        title: "",
        description: "",
        image: null,

        startDate: null,
        startTime: null,
        endDate: null,
        endTime: null,
        capacity: null,
        maxAttendees: null,
        price: null,

        data: {

        },
      },
      locationRules: [
        (v) => !!v || "Location is required",
        (v) => (v && v.length <= 50) || "Location must be less than 50 characters",
      ],
    };
  },
  created() {
    let pe3 = "thePe3"

    this.event.data[pe3] = "legit youssef"

    console.log(this.event.data.thePe3)
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
    addCustomData() {
      if (this.customDataCount > 10) {
        alert("The maximum number of custom data is 10");
        return
      }

      this.customDataCount++;

    },
    createEvent() {
      // TODO: Set price to free if price is empty or 0
      alert("created");
    },
  },
};
</script>
<style></style>
