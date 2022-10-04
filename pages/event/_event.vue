<template>
  <div>
    {{ event }}
  </div>
</template>
<script>
export default {
  name: "Event",
  data() {
    return {
      event: {},
    };
  },
  mounted() {
    this.event = this.$store.state.events.events.find(
      (event) => event.id === parseInt(this.$route.params.event)
    );
  },
};
</script>
<style></style>
