<template>
  <div v-if="event">
    <p>REGISTER HERE</p>
    <button @click="register">Register Me!</button>
  </div>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    register() {
      // call to api
      // if registered, then redirect to event details
      this.GStore.flashMessage = "Succesfully registered for: " + this.event.title
      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)
      this.$router.push({
        name: 'EventDetails',
        params: {id: this.event.id}
      })
    }
  }
}
</script>