<template>
  <div>
    <v-app-bar id="app" app class="header" color="primary">
    <router-link to="/">
      <v-img src="/logo.png" max-width="120" max-height="70"></v-img>
    </router-link>

    <v-spacer></v-spacer>

<!--      Add an url to the data urls if you want to add an page url to the navbar-->
      <div v-if="$vuetify.breakpoint.width > changePoint">
        <v-btn v-for="page in this.pages" :key="page.id"
               :to="page.url"
               class="ml-4"
               color="#fff"
               text >
          {{page.name}}
        </v-btn>
      </div>

    <v-app-bar-nav-icon v-else color="white" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    </v-app-bar>

    <v-navigation-drawer
      id="navbar-drawer"
      absolute
      v-model="drawer"
    >

      <div class="primary pa-3" >
      <router-link to="/" >
        <v-img src="/logo.png" max-width="120" max-height="70"></v-img>
      </router-link>
      </div>
      <v-list >
        <v-list-item-group
          active-class="blue--text text--lighten-3"
        >
          <v-list-item v-for="page in pages" :key="page.id">
            <v-list-item-title @click="$router.push(page.url)">{{page.name}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>
  </div>

</template>

<script>
export default {
  name: "NavigationBar",
  data: () => ({
    drawer: false, // if the navbar is open or not
    changePoint: 800, // this is the point where the navigation bar changes from buttons to a drawer
    pages: [
      { id: 1, name: "Home", url: "/" },
      { id: 2, name: "Events", url: "/events" },
    ],
  }),
}
</script>

<style scoped>
  #app {
    z-index: 0;
  }

  #navbar-drawer {
    z-index: 2;
  }
</style>
