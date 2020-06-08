<template>
  <div class="app-wrapper">
    <div id="app">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background: lightblue;
  font-family: "Helvetica";
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#app {
  margin-top: 2em;
  
  min-height: 300px;
  // min-width: 800px;
  max-width: 1400px;
  padding-left: 1em;
  padding-right: 1em;
  padding-bottom: 1em;

  background: white;
  display: grid;
  box-shadow: -3px 3px 1px 0px rgba(0,0,0,0.30)
}

// @media screen and(){
  
// }
</style>
