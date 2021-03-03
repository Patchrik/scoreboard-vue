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
            @click="decreaseScore"
            ><h3>-</h3></v-btn
          >
          <v-btn
            class="score-button"
            color="rgba(102, 204, 153, 1)"
            elevation="2"
            fab
            @click="increaseScore"
            ><h3>+</h3></v-btn
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
  props: ["score"],
  methods: {
    increaseScore() {
      this.$emit("increase");
    },
    decreaseScore() {
      if (this.score > 0) {
        this.$emit("decrease");
      }
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
