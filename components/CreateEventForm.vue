<template>
  <v-container
    id="main-container"
    class="d-flex fill-height justify-center align-center"
  >
    <v-row>
      <v-col sm="3"></v-col>

      <v-col cols="4" sm="6">
        <v-card id="main-card" outlined elevation="2">
          <!-- <div>
      <v-card-title left>Create a new event</v-card-title>
      <v-btn to="/events"></v-btn>
    </div> -->
          <v-container>
            <v-row class="justify-end">
              <v-col>
                <h3 style="color: #1976d2; margin-left: 3px">
                  Create a new event
                </h3>
              </v-col>
              <v-col class="text-right">
                <div class="text-right">
                  <v-dialog v-model="dialogexit" width="400">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn v-bind="attrs" v-on="on" icon elevation="2"
                        ><v-icon to="/events">mdi-window-close</v-icon>
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="text-h5 white--text primary">
                        Exit creation of event
                      </v-card-title>

                      <v-card-text class="mt-6">
                        Are you sure you want to exit? Your input will be lost.
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-btn color="warning" text @click="dialogexit = false">
                          No
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text to="/events"> Yes </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </v-col>
            </v-row>
          </v-container>

          <v-form>
            <v-card v-if="step == 1" class="card" elevation="0">
              <v-card-title>Event title and description</v-card-title>
              <v-card-text
                >Choose a unique title and description people will remember!
                Make this interesting for potential attendees.
              </v-card-text>

              <v-col>
                <v-text-field
                  id="event-title-input"
                  v-model="event.title"
                  label="Event title"
                  maxlength="30"
                  counter="30"
                  required
                />
              </v-col>

              <v-col>
                <v-textarea
                  v-model="event.description"
                  label="Event description"
                  maxlength="300"
                  counter="300"
                  outlined
                  no-resize
                />
              </v-col>
            </v-card>

            <v-card v-if="step == 2" elevation="0" class="card">
              <v-card-title>Event Image</v-card-title>
              <v-card-text>
                Add an image to your event to lure people in! If no image is
                provided a default image will be used.
              </v-card-text>

              <v-col>
                <v-file-input
                  id="image-input"
                  truncate-length="100"
                  v-model="event.image"
                  show-size
                  accept="image/*"
                  prepend-icon="mdi-camera"
                  label="Upload an image"
                  required
                  style="margin-top: 70px"
                >
                </v-file-input>
              </v-col>
            </v-card>

            <v-card v-if="step == 3" elevation="0" class="card">
              <v-card-title>Event Date's</v-card-title>
              <v-card-text>
                Here you can fill in the date and time of your event!
              </v-card-text>

              <v-container class="d-flex flex-column" fluid>
                <v-row>
                  <v-col cols="12" sm="8">
                    <v-text-field
                      type="date"
                      v-model="event.startDate"
                      label="Start date"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="4">
                    <v-text-field
                      type="time"
                      v-model="event.startTime"
                      label="Start time"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="8">
                    <v-text-field
                      type="date"
                      v-model="event.endDate"
                      label="End date"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="4">
                    <v-text-field
                      type="time"
                      v-model="event.endTime"
                      label="End time"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>

            <v-card v-if="step === 4" elevation="0" class="card">
              <v-card-title>Event data</v-card-title>
              <v-card-text>
                Here you can fill in the data about your event!
              </v-card-text>

              <v-col cols="12" sm="12">
                <v-text-field
                  dense
                  v-model="event.capacity"
                  label="Location"
                  :rules="locationRules"
                  maxlength="50"
                  counter="50"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12">
                <v-text-field
                  dense
                  type="number"
                  v-model="event.maxAttendees"
                  label="Maximum number of attendees"
                  :rules="numberRules"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12">
                <v-text-field
                  dense
                  type="number"
                  append-icon="mdi-currency-eur"
                  v-model="event.price"
                  :rules="numberRules"
                  label="Price"
                  hint="Leave the price empty or at 0 if the event is free"
                  persistent-hint
                  minimum="0"
                ></v-text-field>
              </v-col>
            </v-card>

            <v-card v-if="step === 5" elevation="0" class="card" id="card-4">
              <v-card-title>Custom event data</v-card-title>
              <v-card-text>
                Here you can add all the extra data your event needs! Fill in
                the type of the data and the value of data. You can add up to
                ten custom data fields!
              </v-card-text>

              <v-container id="customdata-container">
                <v-row v-for="data in this.event.customData" :key="data.id">
                  <v-col cols="12" sm="5" class="ml-4">
                    <v-text-field
                      v-model="data.key"
                      label="Type"
                      maxlength="30"
                      counter="30"
                      hint="The type of the custom data, e.x. 'Language'"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="5">
                    <v-text-field
                      v-model="data.value"
                      label="Value"
                      maxlength="30"
                      counter="30"
                      hint="The value of the custom data, e.x. 'English'"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="1">
                    <v-btn
                      class="mt-4"
                      icon
                      color="red"
                      @click="removeCustomData(data.id)"
                    >
                      <v-icon>mdi-window-close</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>

                <v-btn
                  v-if="customDataCount <= 10"
                  class="mx-2"
                  fab
                  small
                  color="primary"
                  @click="addCustomData"
                >
                  <v-icon dark> mdi-plus </v-icon>
                </v-btn>
              </v-container>
            </v-card>

            <v-card v-if="step === 6" elevation="0" class="card" id="card-4">
              <v-card-title>Overview</v-card-title>
              <v-card-text>
                This is an overview of your new event. If you would like to
                change the data, press previous until you find the data you
                would like to change. If you're happy with this overview, press
                the sign button to create your new event.
              </v-card-text>
              <v-divider></v-divider>

              <v-container id="customdata-container">
                <v-row>
                  <v-col cols="4" sm="4">
                    <v-card-title>Event title</v-card-title>
                    <v-card-text class="mt-n3">{{ eventTitle }}</v-card-text>
                  </v-col>
                  <v-col class="ml-n10" cols="8" sm="8">
                    <v-card-title>Event description</v-card-title>
                    <v-card-text class="mt-n3">{{
                      eventDescription
                    }}</v-card-text>
                  </v-col>
                </v-row>
                <v-row class="mt-n2">
                  <v-col col="4" sm="4">
                    <v-card-title>Start date</v-card-title>
                    <v-card-text class="mt-n3">{{
                      eventStartDate
                    }}</v-card-text>
                  </v-col>
                  <v-col class="ml-n10">
                    <v-card-title>Start time</v-card-title>
                    <v-card-text class="mt-n3">{{
                      eventStartTime
                    }}</v-card-text>
                  </v-col>
                  <v-col col="4" sm="4">
                    <v-card-title>End date</v-card-title>
                    <v-card-text class="mt-n3">{{ eventEndDate }}</v-card-text>
                  </v-col>
                  <v-col class="ml-n10">
                    <v-card-title>End time</v-card-title>
                    <v-card-text class="mt-n3">{{ eventEndTime }}</v-card-text>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-card-title>Event location</v-card-title>
                    <v-card-text class="mt-n3">{{ eventLocation }}</v-card-text>
                  </v-col>
                  <v-col>
                    <v-card-title>Max. Attendees</v-card-title>
                    <v-card-text class="mt-n3">{{
                      eventMaxAttendees
                    }}</v-card-text>
                  </v-col>
                  <v-col>
                    <v-card-title>Price</v-card-title>
                    <v-card-text class="mt-n3">{{ eventPrice }}</v-card-text>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>

            <!-- next steps here -->

            <v-card-actions>
              <v-btn v-if="step != 1" @click="previousStep"
                ><v-icon>mdi-arrow-left-thin</v-icon></v-btn
              >
              <v-spacer></v-spacer>
              <v-btn color="primary" v-if="step != steps" @click="nextStep"
                ><v-icon> mdi-arrow-right-thin </v-icon></v-btn
              >

              <div class="text-center" v-if="step == steps">
                <v-dialog v-model="dialog" width="400">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      id="sign-button"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Sign &nbsp; <v-icon>mdi-draw</v-icon>
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="text-h5 white--text primary">
                      Confirm creation of event
                    </v-card-title>

                    <v-card-text class="mt-6">
                      Are you sure you want to create this event? This action
                      cannot be undone.
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-btn color="warning" text @click="dialog = false">
                        Take me back
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="createEvent">
                        Sign &nbsp; <v-icon>mdi-draw</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>

              <!-- <v-btn id="sign-button" v-if="step == steps" @click="createEvent"
            >Sign &nbsp; <v-icon>mdi-draw</v-icon></v-btn
          > -->
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "CreateEventForm",
  data() {
    return {
      dialog: false,
      dialogexit: false,
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

        customData: [
          {
            id: 1,
            key: "",
            value: "",
          },
        ],
      },
      locationRules: [
        (v) => !!v || "Location is required",
        (v) =>
          (v && v.length <= 50) || "Location must be less than 50 characters",
      ],
      numberRules: [
        (v) =>
          Number.isInteger(Number(v)) || "The value must be an integer number",
        (v) => v > 0 || "The value must be greater than zero",
      ],
    };
  },
  computed: {
    eventTitle() {
      return this.event.title == "" ? "No title registered." : this.event.title;
    },
    eventDescription() {
      return this.event.description == ""
        ? "No description registered."
        : this.event.description;
    },
    eventStartDate() {
      return this.event.startDate == null
        ? "No start date registered."
        : this.event.startDate;
    },
    eventEndDate() {
      return this.event.endDate == null
        ? "No end date registered."
        : this.event.endDate;
    },
    eventStartTime() {
      return this.event.startTime == null
        ? "No start time registered."
        : this.event.startTime;
    },
    eventEndTime() {
      return this.event.endTime == null
        ? "No end time registered."
        : this.event.endTime;
    },
    eventLocation() {
      return this.event.location == null
        ? "No location registered."
        : this.event.location;
    },
    eventMaxAttendees() {
      return this.event.maxAttendees == null
        ? "No max. attendees registered."
        : this.event.maxAttendees;
    },
    eventPrice() {
      return this.event.price == null || this.event.price == 0
        ? "Free."
        : "€" + this.event.price;
    },
  },
  created() {},
  methods: {
    nextStep() {
      if (this.step == 1) {
        if (!this.event.title) {
          return false;
        }
      }

      //TODO: no next step when data is empty

      this.step++;
    },
    previousStep() {
      this.step--;
    },
    addCustomData() {
      // TODO: is a maximum necessary? (ask Peter)
      if (this.customDataCount > 10) {
        alert("The maximum number of custom data is 10");
        return;
      }

      this.customDataCount++;

      this.event.customData.push({
        id: this.customDataCount,
        key: "",
        value: "",
      });
    },
    removeCustomData(id) {
      this.customDataCount--;
      this.event.customData = this.event.customData.filter(
        (data) => data.id != id
      );
    },
    ...mapMutations(["events/ADD_EVENT"]),
    createEvent() {
      this.$store.commit("events/ADD_EVENT", this.event);
      this.$router.push("/events");
    },
  },
};
</script>
<style scoped>
#main-container {
  margin-top: 10vh;
}

.card {
  min-height: 360px;
  max-height: 360px;
}

#sign-button {
  background-color: #0076bf;
  color: white;
}

/*To enable scrolling in card if there  is multiple custom data pairs*/
#card-4 {
  display: flex;
  flex-direction: column;
}
#customdata-container {
  flex-grow: 1;
  overflow: auto;
}
</style>
