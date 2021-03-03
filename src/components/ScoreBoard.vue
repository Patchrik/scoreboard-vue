<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <div class="Score-Board">
          <div class="Team-Titles">
            <h2>{{ team1.name }} vs {{ team2.name }}</h2>
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
};
</script>

<style>
.Team-Titles {
  font-size: 85px;
}
</style>
