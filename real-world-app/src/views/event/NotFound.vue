<template>
  <h1>Zoinks!</h1>
  <h3>The {{ resource }} you're looking for is, like, not here, man!</h3>
  <router-link :to="{name: 'EventList'}">Like, go back!</router-link>
</template>

<script>
export default {
  name: "NotFound",
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page'
    }
  }
}
</script>

<style scoped>

</style>