<template>
  <div class="networkError">
    <h1>JINKIES!</h1>
    <h3>Looks like the issue is your network connectivity! <a href="#" @click="$router.go(-1)">CLICK HERE </a>
    to split up and search for clues!</h3>
  </div>
</template>

<script>
export default {
  name: "NetworkError"
}
</script>

<style scoped>

</style>