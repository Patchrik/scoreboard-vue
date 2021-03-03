<template>
  <v-app>
    <v-main>
      <score-board :team1="team1" :team2="team2" />
      <v-row>
        <v-col>
          <point-tracker
            :score="team1.score"
            @increase="increaseScore"
            @decrease="decreaseScore"
          />
        </v-col>
        <v-col>
          <point-tracker :score="team2.score" />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import ScoreBoard from "./components/ScoreBoard.vue";
import PointTracker from "./components/PointTracker.vue";

export default {
  name: "App",

  components: {
    ScoreBoard,
    PointTracker,
  },

  data() {
    return {
      team1: { name: "Team 1", score: 0 },
      team2: { name: "Team 2", score: 0 },
    };
  },
  methods: {
    increaseScore() {
      console.log("I should increase score");
    },

    decreaseScore() {
      console.log("I should decrease score");
    },
  },
};
</script>
