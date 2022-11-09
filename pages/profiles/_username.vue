<template>
  <v-container>
    <v-card id="card" max-width="300" elevation="0">
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <v-avatar color="primary">
              <span class="white--text text-h5">{{
                user.name.slice(0, 2).toUpperCase()
              }}</span>
            </v-avatar>
          </v-col>

          <v-col cols="12" md="6">
            <v-card-title class="pa-0" id="name">{{ user.name }}</v-card-title>
            <v-card-text class="pa-0 green--text" id="description"
              >Online</v-card-text
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-app-bar elevation="0" color="#FFF">
      <v-tabs>
        <v-tab @click="setSelected('Profile')"
          ><v-icon small>mdi-account-box</v-icon>&nbsp;Profile</v-tab
        >
        <v-tab @click="setSelected('POAs')"
          ><v-icon small>mdi-check-decagram</v-icon>&nbsp;POAs</v-tab
        >
      </v-tabs>
    </v-app-bar>
    <Tab :isSelected="selected === 'Profile'">
      <p>Some test text</p>
    </Tab>
    <Tab :isSelected="selected === 'POAs'">
      <div class="d-flex justify-end mb-6">
        <div>
          <v-text-field
            placeholder="Search a poa"
            style="width: 250px"
            solo
          ></v-text-field>
        </div>
      </div>
    </Tab>
  </v-container>
</template>

<script>
import Tab from "~/components/Tab.vue";
export default {
  name: "profile",
  components: {
    Tab,
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
  },
  data: () => ({
    user: Object,
    selected: "Profile",
  }),

  mounted() {
    this.user = this.$store.state.users.users.find(
      (user) => user.username === this.$route.params.username
    );
  },
};
</script>

<style scoped></style>
