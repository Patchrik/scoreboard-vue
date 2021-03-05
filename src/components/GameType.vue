<template>
  <div class="Game-selector">
    <h1>Current Game Type: {{ GameType.name }}</h1>
    <v-btn-toggle v-model="toggle_exclusive" mandatory>
      <v-btn @click="gameChoice(gameChoices.MTG)">
        Magic The Gathering
      </v-btn>
      <v-btn @click="gameChoice(gameChoices.YUGIOH)">
        Yu-Gi-Oh
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
export default {
  props: ["GameType"],
  data() {
    return {
      gameChoices: {
        MTG: {
          name: "Magic The Gathering",
          team1: { name: "Player 1", score: 20 },
          team2: { name: "Player 2", score: 20 },
          scoreType: { lgMinus: -5, stdMinus: -1, stdAdd: 1, lgAdd: 5 },
        },
        YUGIOH: {
          name: "Yu-Gi-Oh",
          team1: { name: "Player 1", score: 8000 },
          team2: { name: "Player 2", score: 8000 },
          scoreType: { lgMinus: -100, stdMinus: -50, stdAdd: 50, lgAdd: 100 },
        },
      },
    };
  },
  methods: {
    gameChoice(choice) {
      this.$emit("game-change", choice);
    },
  },
};
</script>

<style></style>
