<template>
  <div>
    Hello world
    <router-link to="/">/</router-link> |
    <router-link to="/c/A">A</router-link> |
    <router-link to="/c/B">B</router-link>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: "App" as string,
  });
</script>
