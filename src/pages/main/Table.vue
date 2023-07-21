<template>
  <h1>Table 01</h1>
  <q-toggle v-model="noDataLabel" :label="noDataLabel ? '한글' : '기본'" />
  <q-table :no-data-label="noDataLabel ? '데이터가 없습니다.' : ''" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const noDataLabel = ref<boolean>(false);
</script>

<style scoped lang="scss"></style>
