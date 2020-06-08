<template>
  <div class="home">
    <h1>Dass is Good(notes)</h1>
    <nav>
      <button class="removeallbtn" @click="destroyAll">x Delete All shit</button>
      <button class="addmore" @click="addNote">+ Add shit</button>
      <form class="search-form">
        <input class="search-input" type="text" placeholder="Search shit..." v-model="search" />
      </form>
      <!-- <button class="addmore">More shit</button> -->
    </nav>
    <Notes :notes="filteredNotes" />
  </div>
</template>

<script>
import Notes from "@/components/Notes.vue";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      search: ""
    };
  },
  components: {
    Notes
  },
  computed: {
    ...mapState(["listOfNotesFromState"]),
    filteredNotes() {
      return this.listOfNotesFromState.filter(note => {
        return note.title.match(this.search);
      });
    }
  },
  methods: {
    ...mapMutations(["ADD_NOTE", "REMOVE_NOTE", "EDIT_NOTE"]),

    ...mapActions(["removeAllNotes"]),
    ...mapGetters(["findNoteByTitle"]),
    destroyAll() {
      this.removeAllNotes();
      this.msg = "All shit is gone...";
    },
    addNote() {
      this.ADD_NOTE({
        id: Math.random() * 10,
        title: "New Shit to do",
        content: "",
        completed: false,
        defaultColor : 'yellow',
        date : new Date()
      });
    }
  }
};
</script>
<style scoped>
h1 {
  font-weight: 800;
  background: yellow;
  padding: 0.4em;
  text-align: center;
  margin-bottom: 0.5em;
}

nav {
  display: grid;
  margin-bottom: 1em;
  margin-top: 1em;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.5em;
  grid-template-areas: 
  "delete add"
  "search search";
}

@media screen and (max-width: 600px) {
  nav {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 
  "delete"
  "add"
  "search";
}
}


.removeallbtn{
  grid-area: delete;
}

.addmore{
  grid-area: add;
}

.search-form{
  grid-area: search;
}
/* input[placeholder]{
  text-align: center;
  color: black
} */

/* ::placeholder {
  text-align: center;
  color: black;
  transition: color 0.2s;
  text-transform: uppercase;
}

::placeholder:hover {
  color: rgba(0, 0, 0, 0.25);
}

::placeholder:focus{
  color: rgba(0, 0, 0, 0.15);
} */

button {
  border: 1px solid black;
  background: none;
  padding: 0.5em;
  font-family: "Consolas";
  font-weight: 900;
  text-transform: uppercase;
  transition: background 0.2s, border 0.2s;
  cursor: pointer;
}

.search-form {
  display: grid;
}

.search-input {
  transition: background 0.2s, border 0.2s;
  padding: 0.5em;
  font-family: "Consolas";
  font-weight: 900;
  cursor: pointer;
  border: 1px solid black;
}

.search-input:hover {
  background: yellow;
  border: 1px solid yellow;
}

.search-input:focus {
  cursor:text;
  background: none;
  border: 1px solid yellow;
  border:none;
}

.addmore:hover {
  background: yellow;
  border: 1px solid yellow;
}

.addmore:focus {
  background: indigo;
  border: 1px solid indigo;
  color: white;
}

.removeallbtn:hover {
  background: indianred;
  border: 1px solid indianred;
}
.removeallbtn:focus {
  background: black;
  border: 1px solid black;
  color: white;
}
</style>

