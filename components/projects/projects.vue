<script setup lang="ts">
import ProjectCard from "~/components/projects/project-card.vue";
import {ProjectCardProps} from "~/components/projects/project-card-props";

const cards: ProjectCardProps[] = [
  {
    title: "Portfolio",
    description: "Page you are currently looking at. Built using Nuxt / Vue. Project cards are generated from JSON for easier modification.",
    technologies: ["HTML", "CSS", "Vue", "TypeScript", "JavaScript", "AWS"],
    image: 'portfolio.png',
    links: {
      url: "https://stanislawczajka.pl",
      github: "https://github.com/Staszyslaw/portfolio",
    }
  },
]
</script>

<template>
  <div class="projects-container">
    <h2 id="projects">Projects</h2>
    <ProjectCard
        v-for="card in cards"
        :title=card.title
        :description=card.description
        :technologies=card.technologies
        :image=card.image
        :links=card.links
    />
  </div>
</template>

<style scoped>
  .projects-container > h2 {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    margin: 4rem auto 4rem;
    position: relative;
    color: #747fe0;
    width: 100px;

    &::after {
      content: "";
      border: 4px solid #747fe0;
      display: block;
      margin: 20px auto 0;
      width: 60px;
    }
  }
</style>