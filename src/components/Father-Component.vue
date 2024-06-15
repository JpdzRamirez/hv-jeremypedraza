<script setup>
import { ref } from 'vue';

import WindowContainer from './2d-Level-Component/WindowContainer.vue';



defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <div>
    <WindowContainer />
    <button type="button" class="btn btn-primary">Primary  <i class="bi bi-usb-symbol"></i> </button>
</div>
</template>
