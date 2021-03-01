<template>
  <v-app>
    <v-main>
      <score-board />
    </v-main>
  </v-app>
</template>

<script>
import ScoreBoard from "./components/ScoreBoard.vue";

export default {
  name: "App",

  components: {
    ScoreBoard,
  },

  data: () => ({
    //
  }),
};
</script>
