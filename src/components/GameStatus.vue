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
        return `${this.team1.name} is currently winning by ${difference} life points`;
      } else if (this.team1.score < this.team2.score) {
        const difference = this.team2.score - this.team1.score;
        return `${this.team2.name} is currently winning by ${difference} life points`;
      } else {
        return "The game is tied";
      }
    },
  },
};
</script>

<style scoped>
.Game-Status {
  margin: 1em;
}
</style>
