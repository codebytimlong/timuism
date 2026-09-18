<template>
  <div ref="el" @click="handleClick">
    Hey this is a div
  </div>
</template>

<script setup lang="ts">
const el = ref(null)

function handleClick(){
  alert("hey")
}
</script>