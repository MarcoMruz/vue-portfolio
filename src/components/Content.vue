<template>
  <v-row no-gutters>
    <v-col cols="2">
      <Sidebar />
    </v-col>

    <v-col cols="10" sm="4" class="mt-10 mb-10">
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <v-col><router-view></router-view></v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import Vue from "vue";
import Sidebar from "../components/Sidebar";

export default Vue.extend({
  components: {
    Sidebar,
  },
  computed: {
    currentComponent() {
      return this.$store.getters.currentComponent;
    },
  },
});
</script>
