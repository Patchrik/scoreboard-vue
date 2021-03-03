<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <div class="Score-Board">
          <div class="Team-Titles">
            <h2>
              <span :class="winning(team1, team2)">
                {{ team1.name }}
              </span>
              vs
              <span :class="winning(team2, team1)">
                {{ team2.name }}
              </span>
            </h2>
          </div>
        </div>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["team1", "team2"],
  methods: {
    winning(team1, team2) {
      if (team1.score > team2.score) {
        return "winning";
      }
    },
  },
};
</script>

<style>
.Team-Titles {
  font-size: 85px;
  text-shadow: 5px 2px 2px rgba(150, 150, 150, 0.7);
}
.winning {
  color: rgba(218, 165, 32, 0.82);
  text-shadow: 5px 2px 2px rgba(150, 150, 150, 0.7);
}
</style>
