<template>
  <div>
      <el-button type="danger" round @click="axiosError">
          模拟axios接口报错
      </el-button>
      <el-button type="danger" round @click="fetchError">
          模拟fetch接口报错
      </el-button>
      <el-button type="danger" round @click="jsError">
          模拟js运行报错
      </el-button>
      <el-button type="danger" round @click="failPromiseError">
          模拟未处理失败Promise
      </el-button>
      <el-button type="danger" round @click="isShowVueErrorDemo = true">
          模拟Vue错误
      </el-button>
      <VueErrorDemo v-if="isShowVueErrorDemo"></VueErrorDemo>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import VueErrorDemo from './VueErrorDemo.vue';
import { ref } from 'vue';

const isShowVueErrorDemo = ref(false);

const axiosError =  () => {
  // 模拟axios接口报错
   axios.get('http://localhost:3000/api/error?a=1').catch(() => {
      })
}

const fetchError = () => {
  // 模拟fetch接口报错
  fetch('http://localhost:3000/api/error')
      .then((res) => {
          console.log(res)
      }).catch(() => {
      })
}

const jsError = () => {
  // 模拟js运行报错
  const un = undefined
  un.a = '1'
}

const failPromiseError = () => {
  // 模拟未处理失败Promise
  const p = new Promise((_resolve, reject) => {
      reject('失败')
  })
  p.then((res) => {
      console.log(res)
  })
}
</script>

<style scoped>

</style>