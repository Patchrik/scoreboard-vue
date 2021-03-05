<template>
  <v-container class="Score-Tracker">
    <v-row justify="space-around">
      <v-card elevation="4" outlined shaped width="500">
        <v-card-text class="text-center">
          <h1 class="score-total">{{ score }}</h1>
          <v-btn
            class="score-button"
            color="rgba(241, 169, 160, 1)"
            elevation="2"
            fab
            @click="decreaseScore(scoreType.lgMinus)"
            ><h3>{{ scoreType.lgMinus }}</h3></v-btn
          >
          <v-btn
            class="score-button"
            color="rgba(241, 169, 160, 1)"
            elevation="2"
            fab
            @click="decreaseScore(scoreType.stdMinus)"
            ><h3>{{ scoreType.stdMinus }}</h3></v-btn
          >
          <v-btn
            class="score-button"
            color="rgba(102, 204, 153, 1)"
            elevation="2"
            fab
            @click="increaseScore(scoreType.stdAdd)"
            ><h3>+{{ scoreType.stdAdd }}</h3></v-btn
          >
          <v-btn
            class="score-button"
            color="rgba(102, 204, 153, 1)"
            elevation="2"
            fab
            @click="increaseScore(scoreType.lgAdd)"
            ><h3>+{{ scoreType.lgAdd }}</h3></v-btn
          >
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: ["score", "scoreType"],
    methods: {
      increaseScore(amount) {
        this.$emit("increase", amount);
      },
      decreaseScore(amount) {
        this.$emit("decrease", amount);
      },
    },
  };
</script>

<style>
  .score-button {
    margin: 0.5em;
  }
  .score-total {
    font-size: 100px;
    margin: 0.5em;
  }
</style>
