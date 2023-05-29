<script setup lang="ts">
import Navbar from "~/Components/navbar.vue";
import Intro from "~/Components/intro.vue";
import Code from "~/Components/code.vue";
import Projects from "~/Components/Projects/Projects.vue";
import Contact from "~/Components/Contact.vue";
</script>

<template>
  <div id="container">
    <Navbar />
    <Intro />
    <Code />
    <Projects />
    <Contact />
  </div>
</template>

<style scoped>
  #container {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>