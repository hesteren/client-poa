<template>
  <div>
    <v-card>
      <v-card-title>{{ event.title }}</v-card-title>
      <v-card-text>{{ event.description }}</v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
};
</script>
<style></style>
