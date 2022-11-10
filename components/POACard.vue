<template>
  <div>
    <v-card color="white">
      <v-img :src="nft.imageUrl" height="200px"></v-img>
      <v-card-title class="black--text">{{ nft.name }}</v-card-title>
      <v-card-text>
        <v-row class="mx-0 mb-2">
            This POA was created during the {{nft.event}} event!
        </v-row>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "POACard",
  props: {
    nft: Object,    
  },
};
</script>
