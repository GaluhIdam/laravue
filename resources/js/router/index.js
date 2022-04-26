import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// const Home = require('../view/Home').default
// const About = require('../view/About').default

import Home from "../view/Home";
import About from "../view/About";
import NotFound from "../view/NotFound";
import User from "../view/User";

const routes = [
  {
    name: "home",
    path: "/home",
    component: Home,
  },
  {
    path: "/",
    component: Home,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
  {
    name: "user",
    path: "/user/:name?",
    component: User,
    props: true,
  },
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  base: __dirname,
  routes,
});

export default router;
