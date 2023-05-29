<script lang="ts">

export default {
  methods: {
    scrollToContact: function scrollToContact(e: Event) {
      e.preventDefault();
      this.scrollTo('#contact');
    },
    scrollToProject: function scrollToProjects(e: Event) {
      e.preventDefault();
      this.scrollTo('#projects');
    },
    scrollTo: function scrollTo(selector: string) {
      const sel = document.querySelector(selector);
      if (!sel) {
        throw new Error('Projects header should exist by now');
      }

      sel.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
}
</script>

<template>
  <div class="navbar-container">
    <nav class="navbar">
      <a href="#projects" @click="scrollToProject">
        Projects
      </a>
      <a href="#contact" @click="scrollToContact">
        Contact
      </a>
    </nav>
  </div>
</template>

<style scoped>
  .navbar-container {
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
  }

  .navbar {
    display: flex;
    justify-content: space-around;
    width: 300px;
    font-family: 'Montserrat', sans-serif;
    margin-top: 36px;
    font-size: 1.3rem;
    font-weight: 500;
  }

  .navbar > a {
    text-decoration: none;
    color: #5a5d7a;
    transition: .2s ease-in-out;
    position: relative;
  }

  .navbar > a:hover {
    color: #747fe0;
  }

  .navbar > a:hover:after {
    width: 100%;
  }

  .navbar > a:after {
    display: block;
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 0;
    height: 8px;
    content: "";
    transition: width .3s;
    background-color: #747fe0;
  }
</style>