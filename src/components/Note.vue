<template>
  <div class="note-container" :style="{background: note.defaultColor}">
    <header class="note-header">
      <!-- <input class="toogle" type="checkbox" v-model="ckecked" /> -->

      <h3 v-if="!editMenyNav && !editContent && !colorMode" class="note-title">{{note.title}}</h3>
      <!-- <h3 class="note-title">{{getDate}}</h3> -->
      <div class="edit-title-mode" v-if="editTitle">
        <input
          class="input-title"
          type="text"
          v-model="addTitle"
          placeholder="Change your shitty title"
        />
        <!-- <button class="edittitlebtn" @click="changedTitle(note)">change shit title</button>
        <button class="edittitlebtn" @click="exitTitle">ok</button>-->
      </div>
    </header>

    <main class="content-main">
      <p v-if="!editMenyNav && !editTitle && !colorMode" class="contents">{{note.content}}</p>
      <div class="edit-content-mode" v-if="editContent">
        <input
          class="input-content"
          type="text"
          v-model="addContent"
          placeholder="Add some shit content"
        />
        <!-- <button class="editcontentbtn" @click="changedContent(note)">edit shit content</button>
        <button class="exiteditcontent" @click="exitContent">ok</button>-->
      </div>
    </main>

    <section v-if="!editMenyVisible && !editContent && !editTitle" class="edit">
      <button @click="enterEdit()" class="editbtn">edit</button>
    </section>

    <section v-if="colorMode" class="choosecolor">
      <div :style="{background : color1()}" class="color" @click="setColor1"></div>
      <div :style="{background : color2()}" class="color" @click="setColor2"></div>
      <div :style="{background : color3()}" class="color" @click="setColor3"></div>
    </section>

    <nav>
      <div v-if="editMenyVisible" class="edit-meny">
        <button v-if="editMenyNav" class="edittitlebtn" @click="enterTitleMode">edit shit title</button>
        <button v-if="editTitle" class="edittitlebtn" @click="changedTitle(note)">change shit title</button>
        <button v-if="editTitle" class="exitedit" @click="exitTitle">ok</button>

        <button
          v-if="editMenyNav"
          class="editcontentbtn"
          @click="enterContentMode"
        >edit shit content</button>
        <button
          v-if="editContent"
          class="editcontentbtn"
          @click="changedContent(note)"
        >edit shit content</button>
        <button v-if="editContent" class="exitedit" @click="exitContent">ok</button>

        <button v-if="editMenyNav" class="colorpicker" @click="enterColorMode">choose shitty colors</button>
        <button v-if="colorMode" class="exitedit" @click="exitColorMode">ok</button>

        <button
          v-if="editMenyNav"
          class="removenotebtn"
          @click="deleteNote(note)"
        >x Delete this shit</button>
        <button v-if="editMenyNav" class="exitedit" @click="exitEdit()">exit edit</button>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      addTitle: "",
      addContent: "",
      ckecked: false,
      editMenyVisible: false,
      editMenyNav: false,
      editTitle: false,
      editContent: false,
      colorMode: false,
    };
  },
  props: {
    note: Object
  },
  computed: {
    ...mapState(["colors"])
  },
  methods: {
    ...mapMutations(["REMOVE_NOTE"]),
    deleteNote(note) {
      this.REMOVE_NOTE(note);
      this.editMenyVisible = false;
    },

    // ENTER TITLE EDIT MODE
    changedTitle(note) {
      note.title = this.addTitle;
      this.addTitle = "";
    },
    exitTitle() {
      this.editTitle = false;
      this.editMenyNav = true;
    },
    enterTitleMode() {
      this.editTitle = true;
      this.editMenyNav = false;
    },

    // ENTER CONTENT EDIT MODE
    enterContentMode() {
      this.editContent = true;
      this.editMenyNav = false;
    },
    changedContent(note) {
      note.content = this.addContent;
      this.addContent = "";
    },

    // EXIT CONTNENT
    exitContent() {
      this.editContent = false;
      this.editMenyNav = true;
    },

    //// ENTER EDIT MENU
    enterEdit() {
      this.editMenyVisible = true;
      this.editMenyNav = true;
    },
    exitEdit() {
      this.editMenyVisible = false;
      this.editMenyNav = false;
    },

    enterColorMode() {
      this.colorMode = true;
      this.editMenyNav = false;
    },
    exitColorMode() {
      this.colorMode = false;
      this.editMenyNav = true;
    },
    color0() {
      return this.colors[0];
    },
    color1() {
      return this.colors[1];
    },
    color2() {
      return this.colors[2];
    },
    color3() {
      return this.colors[3];
    },

    setColor1() {
      // this.color = this.color1()
      this.note.defaultColor = this.color1()
    },
    setColor2() {
      this.note.defaultColor = this.color2()
    },
    setColor3() {
      this.note.defaultColor = this.color3()
    },

    ...mapGetters(["dateBuilder"]),
    getDate(note) {
      return this.dateBuilder(note);
    }
  }
};
</script>

<style scoped>
.note-container {
  display: flex;
  flex-direction: column;
  /* background: yellow; */
  padding: 0.5em;
  margin-bottom: 0.5em;
  min-width: 160px;
  min-height: 200px;
  box-shadow: -3px 3px 1px 0px rgba(0, 0, 0, 0.3);
}

nav {
  margin-top: 1em;
  display: grid;
  grid-gap: 0.5em;
}

button {
  border: 1px solid black;
  background: none;
  padding: 0.3em;
  font-family: "Consolas";
  font-weight: 900;
  text-transform: uppercase;
  transition: background 0.2s, border 0.2s;
  cursor: pointer;
}

.removenotebtn:hover {
  background: indianred;
  border: 1px solid indianred;
}

.exitedit:hover,
.editbtn:hover {
  background: indigo;
  color: white;
  border: 1px solid indigo;
}

.edittitlebtn:hover,
.editcontentbtn:hover,
.colorpicker:hover {
  background: white;
  border: 1px solid white;
}

.toogle {
  /* grid-area: checkbox; */
  float: right;
}

.note-header {
  display: grid;
  grid-template-areas:
    "title .. checkbox"
    "input input input ";
  grid-template-columns: 12fr 1fr 0.5fr;
  grid-template-rows: 1fr 1fr;
}

.edit-title-mode {
  display: grid;
  grid-area: input;
}

.note-title {
  grid-area: title;
}

.content-main {
  display: grid;
  grid-template-areas:
    "content .. .. "
    "input input input";
  grid-template-columns: 12fr 1fr 0.5fr;
}

.contents {
  grid-area: content;
}

.edit-content-mode {
  display: grid;
  grid-area: input;
}

input {
  border: none;
  padding: 0.2em;
  margin-bottom: 0.2em;
}

.edit-meny {
  display: grid;
  grid-gap: 0.5em;
}

.edit {
  margin-top: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-area: ".. .. .. .. .. edit";
}

.editbtn {
  grid-area: edit;
}

.choosecolor {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 0.1em;
}

.color {
  padding: 1em;
  cursor: pointer;
  border: 1px solid black;
}

.color:focus {
  border: 1px solid yellow;
}
</style>