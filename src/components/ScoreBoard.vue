<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <h1>MTG Life Tracker</h1>
        <div class="Score-Board">
          <div class="team-titles">
            <v-row>
              <v-col>
                <input
                  :class="winning(team1, team2)"
                  type="text"
                  v-model="inputName1"
                />
              </v-col>
              vs
              <v-col>
                <input
                  :class="winning(team2, team1)"
                  type="text"
                  v-model="inputName2"
                />
              </v-col>
            </v-row>
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
  computed: {
    inputName1: {
      get() {
        return this.team1.name;
      },
      set(newName) {
        this.$emit("input1", newName);
      },
    },
    inputName2: {
      get() {
        return this.team2.name;
      },
      set(newName) {
        this.$emit("input2", newName);
      },
    },
  },
};
</script>

<style scoped>
.team-titles {
  font-size: 85px;
  color: rgba(128, 128, 128, 0.9);
  text-shadow: 5px 2px 2px rgba(150, 150, 150, 0.7);
}
.winning {
  color: rgba(128, 128, 128, 0.9);
  text-shadow: 5px 2px 2px rgba(218, 165, 32, 0.82);
}
input {
  width: 100%;
  height: 100%;
  text-align: center;
  text-shadow: 5px 2px 2px rgba(150, 150, 150, 0.7);
  color: rgba(128, 128, 128, 0.9);
  border-bottom: 1px solid rgba(128, 128, 128, 0.9);
}
</style>
