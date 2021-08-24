import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/About.vue";
import EventLayout from "@/views/event/Layout";
import EventDetails from "@/views/event/Details";
import EventRegister from "@/views/event/Register";
import EventEdit from "@/views/event/Edit";
import NotFound from "@/views/event/NotFound"
import NetworkError from "../components/NetworkError"

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: route => ({page:parseInt(route.query.page) || 1})
  },
  {
    path: "/kimi",
    name: "Bwoah!",
    component: About,
  },
  {
    path: "/events/:id",
    name: "EventLayout,",
    props: true,
    component: EventLayout,
    children: [
      {
        path: "",
        name: "EventDetails",
        component: EventDetails
      },
      {
        path: "register",
        name: "EventRegister",
        component: EventRegister
      },
      {
        path: "edit",
        name: "EventEdit",
        component: EventEdit
      }
    ]
  },
  {
    path: '/event/:afterEvent(.*)',
    redirect: to => {
      return {path: '/events/' + to.params.afterEvent}
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
