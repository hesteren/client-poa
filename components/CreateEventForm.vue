<template>

  <v-container id="main-container" class="d-flex fill-height justify-center align-center">
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
          <h3>Create a new event</h3>
        </v-col>
        <v-col class="text-right">
          <v-btn to="/events" icon elevation="2" ><v-icon to="/events">mdi-window-close</v-icon></v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-form >
      <v-card v-if="step == 1" class="card" elevation="0">
        <v-card-title>Event title and description</v-card-title>
        <v-card-text>Choose a unique title and description people will remember! Make this interesting for potential attendees.
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
          Add an image to your event to lure people in! If no image is provided a default image will be used.
        </v-card-text>

        <v-col>
          <v-file-input
            id="image-input"
            truncate-length="100"
            v-model="event.image"
            show-size
            accept="image/*"
            outlined
            prepend-icon="mdi-camera"
            label="Upload an image"
            required
            style="margin-top: 70px;"
          >
          </v-file-input>
        </v-col>
      </v-card>

      <v-card v-if="step == 3" elevation="0" class="card">
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

      </v-card>


      <v-card v-if="step === 4" elevation="0" class="card" >

        <v-card-title>Event data</v-card-title>
        <v-card-text>
          Here you can fill in the data about your event!
        </v-card-text>


        <v-col cols="12" sm="12">
          <v-text-field
            dense
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
            dense
            type="number"
            v-model="event.maxAttendees"
            label="Maximum number of attendees"
            required
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="12">
          <v-text-field
            dense
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

      <v-card v-if="step === 5" elevation="0" class="card" id="card-4">

        <v-card-title>Custom Event data</v-card-title>
        <v-card-text>
          Here you can add all the extra data your event needs! Fill in the type of the data and the value of data. You can add up to ten custom data fields!
        </v-card-text>

        <v-container id="customdata-container">

          <v-row v-for="data in this.event.customData" :key="data.id">

            <v-col cols="12" sm="5">
              <v-text-field
                v-model="data.key"
                label="Type"
                outlined
                maxlength="30"
                counter="30"
                hint="The type of the custom data, e.x. 'Language'"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="5">
              <v-text-field
                v-model="data.value"
                label="Value"
                outlined
                maxlength="30"
                counter="30"
                hint="The value of the custom data, e.x. 'English'"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="1">
              <v-btn
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

        <v-card-actions>
          <v-btn  v-if="step != 1" @click="previousStep  "
            ><v-icon>mdi-arrow-left-thin</v-icon></v-btn
          >
          <v-spacer></v-spacer>
          <v-btn  v-if="step != steps" @click="nextStep"
            ><v-icon> mdi-arrow-right-thin </v-icon></v-btn
          >

          <v-btn id="sign-button" v-if="step == steps" @click="createEvent"
            >Sign &nbsp; <v-icon>mdi-draw</v-icon></v-btn
          >
        </v-card-actions>
    </v-form>
  </v-card>

  </v-col>
  </v-row>
  </v-container>

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
        (v) => (v && v.length <= 50) || "Location must be less than 50 characters",
      ],
    };
  },
  created() {

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

      // TODO: is a maximum necessary? (ask Peter)
      if (this.customDataCount > 10) {
        alert("The maximum number of custom data is 10");
        return
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
      this.event.customData = this.event.customData.filter((data) => data.id != id);
    },
    createEvent() {
      // TODO: Set price to free if price is empty or 0
      alert("created");
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
