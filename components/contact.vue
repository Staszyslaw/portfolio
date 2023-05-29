<script setup lang="ts">

</script>

<template>
  <div class="contact-container">
    <h2 id="contact">Contact me</h2>
    <div class="contact-links">
      <a href="mailto:stanislaw@czajka.pl">stanislaw@czajka.pl</a>
      <div class="spacer" />
      <a href="https://www.linkedin.com/in/stanis%C5%82aw-czajka-46342a1b6/">LinkedIn</a>
      <div class="spacer" />
      <a href="https://github.com/Staszyslaw">GitHub</a>
    </div>

    <div class="copyright">
      Stanisław Czajka &copy; {{new Date().getFullYear()}}
    </div>
  </div>
</template>

<style scoped>
  .contact-container > h2 {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    margin: 4rem auto 160px;
    position: relative;
    color: #747fe0;
    width: 180px;

    &::after {
      content: "";
      border: 4px solid #747fe0;
      display: block;
      margin: 20px auto 0;
      width: 100px;
    }
  }

  .contact-links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 160px;

    & > a {
      text-decoration: none;
      font-family: 'Montserrat', sans-serif;
      font-size: 18px;
      width: 300px;
      text-align: center;
      color: #747fe0;
      transition: .25s ease-out;

      &:hover {
        color: #5a5d7a;
      }
    }
  }

  .spacer {
    width: 2px;
    height: 32px;
    background-color: #5a5d7a;
    display: inline-block;
    position: relative;

    &:before {
      width: 1px;
      height: 24px;
      background-color: #5a5d7a;
      content: "";
      right: 6px;
      top: 3px;
      display: inline-block;
      position: absolute;
    }

    &:after {
      width: 1px;
      height: 24px;
      background-color: #5a5d7a;
      content: "";
      left: 6px;
      top: 3px;
      display: inline-block;
      position: absolute;
    }
  }

  .copyright {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    color: #5a5d7a;
  }
</style>