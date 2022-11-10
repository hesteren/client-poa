<template>
  <v-container>
    <UserCard :user="this.user"></UserCard>

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
      <AboutMeCard :user="this.user"></AboutMeCard>
    </Tab>
    <Tab :isSelected="selected === 'POAs'">
      <div class="d-flex justify-end">
        <div class="pr-3">
          <v-text-field
            label="Search a poa"
            style="width: 250px"
            solo
            v-model="search"
          ></v-text-field>
        </div>
      </div>
      <v-container>
        <v-row>
          <v-col lg="3" md="4" sm="6" v-for="nft in filteredPoas" :key="nft.id">
            <POACard :nft="nft"></POACard>
          </v-col>
        </v-row>
      </v-container>
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
  data() {
    return {
      user: Object,
      selected: "Profile",
      search: "",
    };
  },
  computed: {
    filteredPoas() {
      return this.$store.state.users.users
        .find((user) => user.username === this.$route.params.username)
        .nfts.filter((nft) =>
          nft.name.toLowerCase().includes(this.search.toLowerCase())
        );
    },
  },
  mounted() {
    this.user = this.$store.state.users.users.find(
      (user) => user.username === this.$route.params.username
    );
  },
};
</script>

<style scoped></style>
