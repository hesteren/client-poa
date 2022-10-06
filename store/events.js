export const state = () => ({
    events: [{
      id: 1,
      image: '',
      title: 'How to DAO',
      startDate: '',
      endDate: '',
      location: 'Hogeschool Utrecht',
      organisation: 'Kalipo',
      organizer: 'Peter Nobels & Mathias',
      capacity: 100,
      description: 'How to DAO is an event about the blockchain. An DAO is an decentralized autonomous organisation (at the simplest an whatsapp-group). Visit this event at the HU to get to know more! ',
      members: [
        {
          id: 1,
          name: 'Peter Nobels',
          image: '/stock-person.png',
          role: 'Organizer'
        }, 
        {
          id: 2,
          name: 'Mathias',
          image: '/stock-person.png',
          role: 'Organizer'
        },
      ],
    },
    {
      id: 2,
      image: '',
      title: 'How to DAO 2',
      startDate: '',
      endDate: '',
      location: '',
      organisation: 'Kalipo',
      organizer: '',
      capacity: 100,
      description: 'How to DAO 2 description',
      members: [
        {
          id: 1,
          name: 'Peter Nobels',
          image: '/stock-person.png',
          role: 'Organizer'
        },
      ],
    }]
  })
  
  export const getters = {
    // getCounter(state) {
    //   return state.counter
    // }
    // getEventById: (state) => (id) => {
    //   return state.events.find(event => event.id === parseInt(id))
    // }
  }
  
  export const mutations = {
    // increment(state) {
    //   state.counter++
    // }
  }
  
  export const actions = {
    // async fetchCounter({ state }) {
    //   // make request
    //   const res = { data: 10 };
    //   state.counter = res.data;
    //   return res.data;
    // }
  }