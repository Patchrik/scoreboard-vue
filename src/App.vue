<template>
  <v-app>
    <v-main>
      <v-container>
        <v-col align="center">
          <game-type
            :GameType="gameType.Current"
            @game-change="handleGameChange"
          />
          <score-board
            :team1="gameType.Current.team1"
            :team2="gameType.Current.team2"
            @update-team-name="handleUpdateName"
          />
          <game-status
            :team1="gameType.Current.team1"
            :team2="gameType.Current.team2"
          />
          <v-row>
            <v-col>
              <point-tracker
                :scoreType="gameType.Current.scoreType"
                :score="gameType.Current.team1.score"
                @increase="changeScore($event, gameType.Current.team1)"
                @decrease="changeScore($event, gameType.Current.team1)"
              />
            </v-col>
            <v-col>
              <point-tracker
                :scoreType="gameType.Current.scoreType"
                :score="gameType.Current.team2.score"
                @increase="changeScore($event, gameType.Current.team2)"
                @decrease="changeScore($event, gameType.Current.team2)"
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
  import GameType from "./components/GameType.vue";

  export default {
    name: "App",

    components: {
      ScoreBoard,
      PointTracker,
      GameStatus,
      GameType,
    },

    data() {
      return {
        gameType: {
          Current: {
            name: "Magic The Gathering",
            team1: { name: "Player 1", score: 20 },
            team2: { name: "Player 2", score: 20 },
            scoreType: { lgMinus: -5, stdMinus: -1, stdAdd: 1, lgAdd: 5 },
          },
        },
      };
    },
    methods: {
      changeScore(event, team) {
        const updated = team.score + event;
        if (updated >= 0) {
          team.score = updated;
        }
      },
      handleUpdateName({ team, name }) {
        team.name = name;
      },
      handleGameChange(choice) {
        this.gameType.Current = choice;
      },
    },
  };
</script>
