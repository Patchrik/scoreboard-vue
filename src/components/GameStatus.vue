<template>
  <div class="Game-Status">
    <p>{{ gameStatus }}</p>
  </div>
</template>

<script>
export default {
  props: ["team1", "team2"],
  computed: {
    gameStatus() {
      if (this.team1.score > this.team2.score) {
        const difference = this.team1.score - this.team2.score;
        return `Team 1 is currently winning by ${difference}`;
      } else if (this.team1.score < this.team2.score) {
        const difference = this.team2.score - this.team1.score;
        return `Team 2 is currently winning by ${difference}`;
      } else {
        return "The game is tied";
      }
    },
  },
};
</script>

<style></style>
