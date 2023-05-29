<script lang="ts">
  export default {
    props: {
      title: String,
      description: String,
      technologies: Array<String>,
      image: String,
      links: {
        url: String,
        github: String,
      }
    }
  }
</script>

<template>
  <div class="project-card" v-if="this">
    <img
        :src="this.image"
        alt="project image" />
    <div class="project-card-image-background"></div>
    <div class="project-card-content">
      <div class="project-card-title">{{this ? this.title : ''}}</div>
      <div class="project-card-description">{{this.description}}</div>
      <ul class="project-card-tech-list">
        <li class="project-card-tech" v-for="tech in this.technologies">
          {{tech}}
        </li>
      </ul>
      <div class="project-card-link-container">
        <a class="project-card-link url" target="_blank" :href=this.links.url>Project page</a>
        <a class="project-card-link github" target="_blank" :href=this.links.github>View source</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .project-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0 50px 100px rgba(50,50,93,.05), 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.1);
    height: 320px;
    min-width: 1030px;
    width: calc(95% - 2rem);
    margin: 68px auto 0;
    font-family: 'Montserrat', sans-serif;
    position: relative;
    overflow: hidden;
  }

  .project-card > img {
    position: absolute;
    height: calc(320px + 2rem);
    left: 0;
    top: 0;
    pointer-events: none;
  }

  .project-card-image-background {
    height: 101%;
    width: 83%;
    position: absolute;
    top: -1px;
    left: 200px;
    background: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMxNiIgdmlld0JveD0iMCAwIDQ0NiAzMTYiIHdpZHRoPSI0NDYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09IiI+PHBhdGggZD0ibTI3NC41NDkwNTQgMzE2aDE3MS40NTA5NDZ2LTMxNmgtMzY2LjIyMTgzMDNsLTI3LjgxNjg1NjMgMTExLjMwNzAxIDUxLjEzNjc5NDYgMjA0LjY5Mjk5eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im0yNC4xNTEwOTI1IDBoNTUuNjk3ODE1bC0yNy44ODg4ODQyIDExMS4zMjA5ODR6IiBmaWxsPSIjYzFkZGZmIiBvcGFjaXR5PSIuNTU2ODM5Ii8+PHBhdGggZD0ibTUxLjk2MDMxMTkgMTExLjMxODAyNCA1MS4xNDkyMjcxIDIwNC42ODE5NzZoLTEwMi4zMTE1NTcxNHoiIGZpbGw9IiM5Mzg3ZTQiIG9wYWNpdHk9Ii41MjY2MDgiLz48L2c+PC9zdmc+);
    background-size: cover;
  }

  .project-card-content {
    z-index: 3;
    padding: 4rem;
    margin-right: 100px;
    max-width: 45%;
  }

  .project-card-title {
    font-weight: 500;
    font-size: 2rem;
    color: #747fe0;
    margin-top: -20px;
    margin-bottom: 20px;
  }

  .project-card-description {
    font-size: 0.9rem;
    margin-top: 0.3rem;
    line-height: 25px;
  }

  .project-card-tech-list {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 40px;
    padding-inline-start: 0;
  }

  .project-card-tech {
    list-style: none;
    padding: 0.5rem;
    border-radius: 4px;
    position: relative;
    background: #fafafa;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #2dbb41;
  }
  .project-card-link-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .project-card-link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 40px;
    text-decoration: none;
    color: #747fe0;
    border-radius: 8px;
    border: 2px solid #747fe0;
    transition: .25s ease-in;
    font-size: 14px;

    &:hover {
      background: linear-gradient(60deg, rgba(116,127,224,1) 0%, rgba(90,99,181,1) 62%);
      color: white;
    }
  }

  .github {
    &:before {
      background: url('/github-mark.svg');
      background-size: cover;
      width: 20px;
      height: 20px;
      content: "";
      margin-right: 4px;
      margin-left: 2px;
    }
  }
</style>