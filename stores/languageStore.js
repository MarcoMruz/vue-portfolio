import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    language: "sk",
  },

  mutations: {
    changeLanguage(state, newLanguage) {
      state.language = newLanguage;
      this.$i18n.locale = state.language;
    },
  },

  getters: {
    getLanguage: (state) => {
      return state.language;
    },
    getAccessibleLanguages: () => {
      return languages;
    },
  },
});

const languages = ["en", "sk"];

export default store;
