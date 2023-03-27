<template>
  <div class="wings-preview">
    <pre class="language-html"><code class="language-html">{{ states.sourceCode }}</code></pre>  </div>
</template>
<script setup lang="ts">
import Prism from 'prismjs';
import 'prismjs/themes/prism-solarizedlight.css'
import { reactive, watch } from 'vue';

const props = defineProps({
  compName: String,
  demoName: String
})

const states = reactive({
  sourceCode: ''
})

const dynamicImport  = async () => {
  states.sourceCode =  (
    await import(/* @vite-ignore */ `../../packages/${props.compName}/docs/${props.demoName}.vue?raw`)
  ).default;
}

dynamicImport()

watch(
  () => states.sourceCode,
  (val) => {
    if (val) {
      Prism.highlightAll()
    }
  }
)
</script>