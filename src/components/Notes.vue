<template>
  <div class="note">
    <!-- <h1>All this shit is your shitty Notes</h1> -->
    <div class="note-wrapper">
      <Note v-for="(note,index) in notes" :key="index" :note="note" />
    </div>
  </div>
</template>

<script>
import Note from "@/components/Note";
export default {
  components: {
    Note
  },
  props: {
    notes: Array
  },
  computed: {}
};
</script>

<style scoped>
h1 {
  margin-bottom: 1em;
}
.note-wrapper {
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: repeat(3, 1fr);
  /*grid-auto-rows: 1fr;*/
}

@media screen and (max-width: 600px) {
  .note-wrapper {
    display: grid;
    grid-gap: 0.1em;
    grid-template-columns: repeat(1,1fr);
    /*grid-auto-rows: 1fr;*/
  }
}
</style>