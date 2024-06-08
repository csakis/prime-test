<template>
  <p v-tooltip.top="'hi'">counter: {{ counter }}</p>
</template>

<script setup>
import { ref } from "vue";
const counter = ref(0);

setInterval(() => {
  counter.value += 1;
}, 500);
</script>
