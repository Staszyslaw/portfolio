<script setup lang="ts">
import Navbar from "~/components/navbar.vue";
import Intro from "~/components/intro.vue";
import Code from "~/components/code.vue";
import Projects from "~/components/projects/projects.vue";
import Contact from "~/components/contact.vue";
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