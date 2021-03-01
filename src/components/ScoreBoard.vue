<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <div class="Score-Board">
          <div class="Team-Titles">Team 1 vs Team 2</div>
        </div>
      </v-row>
      <v-row>
        <v-col>
          <point-tracker />
        </v-col>
        <v-col>
          <point-tracker />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import PointTracker from "./PointTracker";
export default {
  components: { PointTracker },
};
</script>

<style>
.Team-Titles {
  font-size: 85px;
}
</style>
