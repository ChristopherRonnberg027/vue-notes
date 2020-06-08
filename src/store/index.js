import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listOfNotesFromState: [
      // { id: 1, title: "Svensk", content: 'Content', completed: false, date: new Date() },
      // { id: 2, title: "Dansk", content: 'Content', completed: false, date: new Date() },
      // { id: 3, title: "Norsk", content: 'Content', completed: false, date: new Date() }
    ],
    titleInState: "",
    contentInstate: "",
    colors: ["yellow", "lightgreen", "lightblue", "lightcoral"]
  },
  getters: {
    // findNoteByTitle: (state, searchedTitle) => {
    //   return state.listOfNotesFromState.filter(note => note.title = searchedTitle)
    // },
    // findNoteById: (state, searchedId) => {
    //   return state.listOfNotesFromState.filter(note => note.title = searchedId)
    // },
    dateBuilder(state, note) {
      // let d = new Date();
      let dNote = state.listOfNotesFromState.filter(n => n == note)
      let d = dNote.date
      let months = ["January", "Februari", "Mars", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    }
  },
  mutations: {
    ADD_NOTE: (state, note) => {
      state.listOfNotesFromState.push(note)
    },
    REMOVE_NOTE: (state, note) => {
      state.listOfNotesFromState.splice(
        state.listOfNotesFromState.indexOf(note), 1)
    },
    REMOVE_ALL: (state) => {
      state.listOfNotesFromState = []
    },
    EDIT_NOTE: (state, edit) => {
      state.listOfNotesFromState.filter(note => note == edit)
    },
  },
  actions: {
    removeAllNotes: (context) => {
      context.commit('REMOVE_ALL')
    }
  },
  modules: {
  }
})
