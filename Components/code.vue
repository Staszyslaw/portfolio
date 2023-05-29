<script setup lang="ts">

</script>

<template>
  <div class="code-container">
    <div class="code-header">
      <div class="code-header-buttons">
        <div class="code-header-button close"></div>
        <div class="code-header-button minimize"></div>
        <div class="code-header-button maximize"></div>
      </div>
      <div class="code-header-title">
        <span>vim</span>
      </div>
    </div>
    <div class="code-body">
      <span class="code-line">{</span>
      <span class="code-line i-2">
        "<span class="yellow">personal_information</span>": {</span>
      <span class="code-line i-4">
        "<span class="yellow">name</span>": "<span class="purple">Stanisław</span>",</span>
      <span class="code-line i-4">
        "<span class="yellow">surname</span>": "<span class="purple">Czajka</span>",</span>
      <span class="code-line i-4">
        "<span class="yellow">city</span>": "<span class="purple">Kozienice</span>",</span>
      <span class="code-line i-4">
        "<span class="yellow">country</span>": "<span class="purple">Poland</span>"</span>
      <span class="code-line i-2">},</span>
      <span class="code-line i-2">
        "<span class="yellow">contact</span>": {</span>
      <span class="code-line i-4">
        "<span class="yellow">email</span>": "<span class="purple">stanislaw@czajka.pl</span>",</span>
      <span class="code-line i-4">
        "<span class="yellow">phone</span>": {</span>
      <span class="code-line i-6">
        "<span class="yellow">prefix</span>": "<span class="purple">(+48)</span>",</span>
      <span class="code-line i-6">
        "<span class="yellow">number</span>": "<span class="purple">787-140-787</span>"</span>
      <span class="code-line i-4">}</span>
      <span class="code-line i-2">},</span>
      <span class="code-line i-2">
        "<span class="yellow">skills</span>": {</span>
      <span class="code-line i-4">
        "<span class="yellow">front-end</span>": [
        "<span class="purple">JavaScript</span>",
        "<span class="purple">TypeScript</span>",
        "<span class="purple">React</span>",
        "<span class="purple">Vue</span>",
        "<span class="purple">CSS</span>"
        ],</span>
      <span class="code-line i-4">
        <span class="yellow">"back-end</span>": [
        "<span class="purple">Node.JS</span>",
        "<span class="purple">Next</span>",
        "<span class="purple">Nuxt</span>",
        "<span class="purple">Express.JS</span>",
        "<span class="purple">MySQL</span>",
        "<span class="purple">Postgress</span>",
        "<span class="purple">MongoDB</span>"
        ],</span>
      <span class="code-line i-4">
        "<span class="yellow">other</span>": [
        "<span class="purple">git</span>",
        "<span class="purple">bash/zsh</span>",
        "<span class="purple">RxJS</span>",
        "<span class="purple">Redux</span>",
        "<span class="purple">inversify</span>",
        "<span class="purple">React Native</span>"
        ],</span>
      <span class="code-line i-4">
        "<span class="yellow">languages</span>": {</span>
      <span class="code-line i-6">
        "<span class="yellow">polish</span>": "<span class="purple">native</span>",</span>
      <span class="code-line i-6">
        "<span class="yellow">english</span>": "<span class="purple">C1</span>",</span>
      <span class="code-line i-6">
        "<span class="yellow">spanish</span>": "<span class="purple">A2</span>"</span>
      <span class="code-line i-4">}</span>
      <span class="code-line i-2">},</span>
      <span class="code-line i-2">
        "<span class="yellow">hobbies</span>": [
        "<span class="purple">cooking</span>",
        "<span class="purple">photography</span>",
        "<span class="purple">strategical games</span>"
        ]</span>
      <span class="code-line">}</span>
    </div>
    <div class="code-bottom-bar">
      Stanislaw_Czajka_Resume.json
    </div>
    <div class="code-bottom-bar-black">
    </div>
  </div>
</template>

<style scoped>
  .code-container {
    margin: 5rem auto 0 auto;
    min-width: 755px;
    height: 50vh;
    min-height: 520px;
    max-height: 680px;
    border: 1px solid black;
    border-radius: 0.8em;
  }
  .code-header {
    height: 28px;
    background-color: #9b9b9b;
    border-radius: 10px 10px 0 0;
    display: flex;
    flex-direction: row;
  }

  .code-header-buttons {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
  }

  .code-header-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 14px;
    margin-top: 4px;
  }

  .code-header-button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-left: 9px;
  }

  .code-body {
    height: calc(100% - 28px - 36px);
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: #fafafa;
    font-family: 'Inconsolata', monospace;
    font-size: 1rem;
  }

  .code-bottom-bar {
    font-family: 'Inconsolata', monospace;
    background-color: #fafafa;
    width: calc(100% - 0.5rem);
    height: 18px;
    padding-left: 0.5rem;
    font-weight: 800;
    color: #0e0e0e;
  }

  .code-bottom-bar-black {
    height: 18px;
    background-color: black;
    border-radius: 0 0 .8rem .8rem;
  }

  .code-line {
    display: flex;
    flex-direction: row;
    word-break: keep-all;
  }

  .close {
    background-color: #f96256;
    border: 1px solid #f65549;
  }

  .minimize {
    background-color: #fdbc3d;
    border: 1px solid #ffb524;
  }

  .maximize {
    background-color: #33c948;
    border: 1px solid #2dbb41;
  }

  .i-2 {
    margin-left: 20px;
  }

  .i-4 {
    margin-left: 40px;
  }

  .i-6 {
    margin-left: 60px;
  }

  .yellow {
    color: #f8fe15;
  }

  .purple {
    color: #f04af6;
  }
</style>