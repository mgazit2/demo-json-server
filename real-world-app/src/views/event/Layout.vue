<template>
  <div v-if="event">
    <h1>{{event.title}}</h1>
    <div id="nav">
      <router-link :to="{name: 'EventDetails'}"
      >Details </router-link>
      <router-link :to="{name: 'EventRegister'}"
      >Register </router-link>
      <router-link :to="{name: 'EventEdit'}"
      >Edit</router-link>
    </div>
    <router-view :event="event" />
  </div>
</template>

<script>
import EventService from "@/services/EventService";

export default {
  props: ['id'],
  data() {
    return {
      event: null
    }
  },
  created() {
    // fetch event by id and set to local event
    EventService.getEvent(this.id)
        .then(response => {
          this.event = response.data
        })
        .catch(error => {
          if (error.response.status == 404) {
            this.$router.push({
              name: '404Resource',
              params: { resource: 'event'}
            })
          }
          else {
            this.$router.push({name: 'NetworkError'})
          }

        })
  }
}
</script>

<style scoped>

.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}

</style>