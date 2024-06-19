<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <HelloWorld msg="Vite + Vue" />
  <div ref='player'>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'

import rrwebPlayer from 'rrweb-player';
import 'rrweb-player/dist/style.css';
import { onMounted, ref } from 'vue';
import { events } from './data';

const player = ref();

onMounted(()=>{
  new rrwebPlayer(
        {
          target: player.value, // 回放所需要的HTML元素
          data: { events }
        },
     )
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
