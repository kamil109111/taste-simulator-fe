<template>

  <div>
    <!-- ukryj przycisk na średnich i mniejszych ekranach -->
    <v-btn class="hidden-md-and-down">md and down</v-btn>

    <!-- ukryj przycisk na średnich i większych ekranach -->
    <v-btn class="hidden-md-and-up">md and up</v-btn>

    <!-- ukryj przycisk tylko na małych ekranach -->
    <v-btn class="hidden-sm-only">sm only</v-btn>
  </div>

</template>

<script>
export default {
name: "BreakpointsAndVisibility"
}
</script>

<style scoped>

</style>