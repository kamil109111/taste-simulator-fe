<template>
<div>

  <v-btn>click me</v-btn>
  <v-btn class="pink white--text">click me</v-btn>
  <v-btn depressed dark color="pink">click me</v-btn>

  <v-btn depressed class="pink white--text">
    <v-icon left>mdi-email</v-icon>
    <span>email me</span>
  </v-btn>

  <v-btn depressed small class="pink white--text">
    <v-icon small left>mdi-email</v-icon>
    <span>email me</span>
  </v-btn>

  <v-btn depressed large class="pink white--text">
    <span left>email me</span>
    <v-icon large right left>mdi-email</v-icon>
  </v-btn>

  <v-btn fab depressed small color="purple">
    <v-icon small color="white">mdi-heart</v-icon>
  </v-btn>

</div>
</template>

<script>
export default {
name: "ButtonsAndIcons"
}
</script>

<style scoped>

</style>