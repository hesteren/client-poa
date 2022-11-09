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
    <TabNav
      :tabs="['About me', 'POAs']"
      :selected="selected"
      @selected="setSelected"
    >
      <Tab :isSelected="selected === 'About me'">
        <p>Some test text</p>
      </Tab>
      <Tab :isSelected="selected === 'POAs'">
        <h1>More test text</h1>
      </Tab>
    </TabNav>
  </v-container>
</template>

<script>
import TabNav from "~/components/TabNav.vue";
import Tab from "~/components/Tab.vue";
export default {
  name: "profile",
  components: {
    TabNav,
    Tab,
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
  },
  data: () => ({
    user: Object,
    selected: "About me",
  }),

  mounted() {
    this.user = this.$store.state.users.users.find(
      (user) => user.username === this.$route.params.username
    );
  },
};
</script>

<style scoped></style>
