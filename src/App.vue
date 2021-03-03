<template>
  <v-app>
    <v-main>
      <v-container>
        <v-col align="center">
          <score-board :team1="team1" :team2="team2" />
          <game-status :team1="team1" :team2="team2" />
          <v-row>
            <v-col>
              <point-tracker
                :score="team1.score"
                @increase="changeScore(team1, 1)"
                @decrease="changeScore(team1, -1)"
              />
            </v-col>
            <v-col>
              <point-tracker
                :score="team2.score"
                @increase="changeScore(team2, 1)"
                @decrease="changeScore(team2, -1)"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ScoreBoard from "./components/ScoreBoard.vue";
import PointTracker from "./components/PointTracker.vue";
import GameStatus from "./components/GameStatus.vue";

export default {
  name: "App",

  components: {
    ScoreBoard,
    PointTracker,
    GameStatus,
  },

  data() {
    return {
      team1: { name: "Team 1", score: 0 },
      team2: { name: "Team 2", score: 0 },
    };
  },
  methods: {
    changeScore(team, amount) {
      const updated = team.score + amount;
      team.score = updated;
      console.log(updated);
    },
  },
};
</script>
