<template>
  <div>
    <v-card color="white" @click.stop="dialog = true">
      <v-img :src="nft.imageUrl" height="200px"></v-img>
      <v-card-title class="black--text">{{ nft.name }}</v-card-title>
      <v-card-text>
        <v-row class="mx-0 mb-2">
            This POA was created during the {{nft.event}} event!
        </v-row>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
    </v-card>

    <v-dialog v-model="dialog" width="550">
        <v-card>
        <v-card-title class="text-h5 white--text primary">
            <span class="ml-4">POA view</span>
        </v-card-title>

        <div class="ml-5 mr-12">
            <v-card-text>
            <v-icon>mdi-folder-text</v-icon>
            <span class="ml-2">Name:</span>
            <span class="float-right">{{nft.name}}</span>
            </v-card-text>
        </div>
        <v-divider></v-divider>
        <div class="ml-5 mr-12">
            <v-card-text>
            <v-icon>mdi-clipboard-text-clock</v-icon>
            <span class="ml-2">Issue date:</span>
            <span class="float-right">{{nft.creationDate}}</span>
            </v-card-text>
        </div>
        <v-divider></v-divider>
        <div class="ml-5 mr-12">
            <v-card-text>
            <v-icon>mdi-image</v-icon>
            <span class="ml-2">Image URL:</span>
            <a class="float-right" target="_blank" :href="nft.imageUrl">Link to image</a>
            </v-card-text>
        </div>
        <v-divider></v-divider>
        <div class="ml-5 mr-12">
            <v-card-text>
            <v-icon>mdi-calendar</v-icon>
            <span class="ml-2">Event:</span>
            <a class="float-right" :href="`/events/${nft.eventId}`">{{nft.event}}</a>
            </v-card-text>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
            <v-btn class="ml-1" color="primary" text @click="dialog = false">
            Close
            </v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "POACard",
  data: () => ({
    dialog: false,
  }),
  props: {
    nft: Object,    
  },
};
</script>
<style scoped>
    a {
        text-decoration: none;
    }
</style>
