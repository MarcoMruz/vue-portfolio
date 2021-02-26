import Vue from "vue";
import VueRouter from "vue-router";
import About from "../src/components/About";
import Translate from "../src/components/Translate";
import MainForm from "../src/components/MainForm";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: MainForm },
  { path: "/about", component: About },
  { path: "/translate", component: Translate },
];

export default new VueRouter({
  routes,
});
