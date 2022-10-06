<template>
  <div id="the-div">
    
    <div id="event-info">
      <h1>{{ event.title }}</h1>
      <p id="event-description">{{ event.description }}</p>

      <ul id="info-list">
        <li v-if="event.start_date != null "> 
          Startdate : {{ event.start_date }}
        </li>
        <li v-if="event.end_date != null" >
          Enddate : {{ event.end_date }}
        </li>
        <li  v-if="event.location != ''">
          Location: {{ event.location }} 
        </li>
        <li v-if="event.organisation != null">
          Organisator: {{ event.organisation }}
        </li>
        <li v-if="event.organiser != null">
          Organiser: {{ event.organiser }}
        </li>
        <li v-if="event.capacity != null">
          Capacity: {{ event.capacity }}
        </li>
      </ul>
    </div>

    <!-- hier komt de image -->

    <v-img 
      id="event-image"
      src="/DAO_article.png"
      max-width="1000"
      max-length="1000"
      >
    </v-img>


    <br>

    <h2 id="members-text">
      Members
    </h2>

    <div id="members">
      <br>
      <MemberCard
        v-for="member in event.members"
        :member="member"
        :key="member.id"
      ></MemberCard>
    </div>

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
  updated() {
    console.log(this.event.organiser);
  },
};
</script>
<style scoped>
  #the-div {
    display: grid;
    grid-template-areas: 
    "event-info  event-image"
    "members-text members-text"
    "members     members";
  }

  #event-info {
    grid-area: event-info;
  }

  #event-image {
    grid-area: event-image;
  }

  #members-text {
    grid-area: members-text;
  }

  #members {
    grid-area: members;
  }

  #event-info {
    max-width: 80vh;
  }

  #members {
    margin-left: 10vh;
  }

  #members-text {
    margin-top: 5vh;
    font-size: 2rem;
    margin-left: 10vh;
  }

  h1 {
    font-size: 3rem;
    margin-left: 10vh;
    margin-top: 15vh;
  }

  #event-description {
    font-size: 1rem;
    margin-left: 10vh;
    margin-top: 1vh;
  }

  #info-list {
    margin-left: 9vh;
    margin-top: 3vh;
    font-size: 1rem;
    font-weight: bold;
  } 
</style>
