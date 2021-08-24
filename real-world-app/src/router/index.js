import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/About.vue";
import EventDetails from "@/components/EventDetails";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/kimi",
    name: "Bwoah!",
    component: About,
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
