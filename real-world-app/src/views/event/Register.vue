<template>
  <div v-if="event">
    <p>REGISTER HERE</p>
    <button @click="register">Register Me!</button>
  </div>
</template>

<script>
export default {
  props: ['event'],
  methods: {
    register() {
      // call to api
      // if registered, then redirect to event details
      this.$router.push({
        name: 'EventDetails',
        params: {id: this.event.id}
      })
    }
  }
}
</script>