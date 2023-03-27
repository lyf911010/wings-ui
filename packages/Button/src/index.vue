<template>
    <button @click="$emit('click', $event)">
        <slot></slot>
    </button>
</template>
<script setup lang="ts">
defineEmits(['click'])
</script>