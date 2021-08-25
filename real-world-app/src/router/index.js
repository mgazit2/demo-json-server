import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/About.vue";
import EventLayout from "@/views/event/Layout";
import EventDetails from "@/views/event/Details";
import EventRegister from "@/views/event/Register";
import EventEdit from "@/views/event/Edit";
import NotFound from "@/views/event/NotFound"
import NetworkError from "../components/NetworkError"
import NProgress from 'nprogress'
import EventService from "@/services/EventService";
import GStore from '@/store'

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
    beforeEnter: to => {
      // fetch event by id and set to local event
      return EventService.getEvent(to.params.id)
          .then(response => {
            GStore.event = response.data
          })
          .catch(error => {
            if (error.response.status == 404) {
              return {
                name: '404Resource',
                params: {resource: 'event'}
              }
            } else {
              return {name: 'NetworkError'}
            }

          })
    },
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
        component: EventEdit,
        meta: {requireAuth: true}
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
  scrollBehavior() {
    /*if (savedPosition) {
      return savedPosition
    } else */
    return {top:0}
  },
});

router.beforeEach((to, from) => {
  NProgress.start()
  const notAuth = true
  if (to.meta.requireAuth && notAuth) {
    GStore.flashMessage = 'Like, no way am I letting you in there, man!'
    setTimeout(() => {
      GStore.flashMessage = ''
    }, 3000)
    if (from.href) {
      return false
    }
    else {
      return {path: '/'}
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router;
