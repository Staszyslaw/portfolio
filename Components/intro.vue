<template>
<div class="intro-container">
  <h1 class="intro-name">Stanisław Czajka</h1>
  <span class="into-content">
    <span class="highlight">
      Greetings!
    </span>
    I'm a full-stack developer with a strong focus on web development.
    I possess versatile skills and I am proficient in both <span class="highlight">frontend</span>
    and <span class="highlight">backend</span> technologies.
    Leveraging my expertise in <span class="highlight">React</span>, <span class="highlight">TypeScript</span>, and <span class="highlight">Node.js</span>,
    I create seamless and feature-rich applications that leave a lasting impression.
    With meticulous attention to detail and a commitment to delivering excellence,
    I thrive in building comprehensive solutions that meet and surpass expectations.
  </span>
</div>
</template>

<style scoped>
  .intro-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 5rem auto 0 auto;
    font-family: 'Montserrat', sans-serif;
  }

  .into-content {
    color: #5a5d7a;
    font-size: 18px;
    width: 70%;
  }

  .intro-name {
    font-size: 4em;
    font-weight: 500;
    color: #747fe0;
  }

  .intro-name:before {
    content: ">";
    padding-right: 1rem;
  }

  .intro-name:after {
    content: "_";
    animation: caret 1s steps(1) infinite;
    padding-left: 0.5rem;
  }

  .highlight {
    font-weight: 700;
    color: #2dbb41;
  }

  @keyframes caret {
    50% {
      color: transparent;
    }
  }
</style>
<script setup lang="ts">
</script>