<template>
  <v-card id="card" outlined elevation="1">

    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <v-card-title class="pa-0" id="name">{{ member.name }}</v-card-title>
          <v-card-text class="pa-0" id="description">{{ member.role }}</v-card-text>


        </v-col>

        <v-col cols="12" md="4">
          <v-avatar >
            <v-img
            :src="member.image"
            max-height="50"
            max-width="50"
            >

            </v-img>
          </v-avatar>
        </v-col>
      </v-row>

    </v-container>
  </v-card>

</template>
<script>
  export default {
    name: "MemberCard",
    props: {
      member: Object,
    },
  };
</script>
<style scoped>

  #card {
    background-color: rgb(227, 227, 227);
    color: black;
    max-width: 300px;
  }


</style>
