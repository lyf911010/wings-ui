<template>
    <div>
      <w-button @click="onClick(1)">第一个</w-button>
      <w-button @click="onClick(2)">第二个</w-button>
      <w-button @click="onClick(3)">第三个</w-button>
    </div>
  </template>
  
  <script setup>
  const onClick = (num) => { console.log(`我是第 ${num} 个自定义按钮`) }
  </script>