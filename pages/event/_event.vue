<template>
  <div id="the-div">
    
    <div id="event-info">
      <h1>{{ event.title }}</h1>
      <p id="event-description">{{ event.description }}</p>

      <ul id="info-list">
        <li v-if="event.startDate != '' "> 
          Startdate : {{ event.startDate }}
        </li>
        <li v-if="event.endDate != ''" >
          Enddate : {{ event.endDate }}
        </li>
        <li  v-if="event.location != ''">
          Location: {{ event.location }} 
        </li>
        <li v-if="event.organisation != ''">
          Organisation: {{ event.organisation }}
        </li>
        <li v-if="event.organizer != ''">
          Organizer: {{ event.organizer }}
        </li>
        <li v-if="event.capacity != ''">
          Capacity: {{ event.capacity }}
        </li>
      </ul>
    </div>


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

    <br>
    
    <div id="members">
      <v-container>
        <v-row 
        dense="true"
        >

          <v-col
          cols="3"
          md="3"
          v-for="member in event.members"
          :key="member.id">
            
            <MemberCard
              :member="member"
            ></MemberCard>

          </v-col>


        </v-row>
      </v-container>
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
};
</script>
<style scoped>
  #the-div {

    display: grid;
    grid-template-areas: 
    "event-info     event-image"
    "members-text   members-text"
    "members        members";
    grid-template-columns: 60vh 200vh;

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

  #event-image {
    margin-left: 7vh;
  }

  #members {
    margin-left: 8vh;
    width: max-content;
    
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
