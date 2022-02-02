<script setup lang="ts">
import "./styles/global.css";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<style></style>
