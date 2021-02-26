<template>
  <div>
    <v-app-bar color="accent-4" dense dark>
      <router-link to="/"
        ><v-toolbar-title>Page title</v-toolbar-title></router-link
      >

      <v-spacer></v-spacer>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="language in languages"
            :key="language"
            @click="
              () => {
                changeLanguage(language);
              }
            "
          >
            <v-list-item-title>{{ language }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  computed: {
    getLanguage() {
      return this.$store.getters.getLanguage;
    },
    languages() {
      return this.$store.getters.getAccessibleLanguages;
    },
  },

  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language;
    },
  },
});
</script>
