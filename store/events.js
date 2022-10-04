export const state = () => ({
    events: [{
      id: 1,
      title: 'How to DAO',
      startDate: '',
      endDate: '',
      location: '',
      organisation: 'Kalipo',
      organizer: '',
      capacity: 100,
      description: 'How to DAO description',
    },
    {
      id: 2,
      title: 'How to DAO 2',
      startDate: '',
      endDate: '',
      location: '',
      organisation: 'Kalipo',
      organizer: '',
      capacity: 100,
      description: 'How to DAO 2 description',
    }]
  })
  
  export const getters = {
    // getCounter(state) {
    //   return state.counter
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