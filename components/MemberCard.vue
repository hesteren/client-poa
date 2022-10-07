<template>
    <div id="the-div">
      <v-card id="card">
        <v-card-title id="name">{{ member.name }}</v-card-title>
        <v-card-text id="description">{{ member.role }}</v-card-text>
        <v-img id="img" :src="member.image"></v-img>
      </v-card>
    </div>
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
    /* Removes horizontal scrollbar */
    #the-div {
      overflow: hidden;
      max-height: 80px;
      max-width: 300px;
    }

    #card {
      display: grid;
      grid-template-columns: 25vh 11vh;
      grid-template-rows: 6vh 4vh;
      grid-template-areas: 
      "name  img"
      "description img";
      max-width: 300px;

    }

    #img {
      grid-area: img;
    }

    #name {
      grid-area: name;
    }

    #description {
      grid-area: description;
    }

    #description {
      margin-top: 0%;
    }

    #img {
      margin: auto;
      width: 60%;
      max-height: 60px;
      max-width: 70px;
      border-radius: 50px;
      margin-right: 0px;
    }
  </style>