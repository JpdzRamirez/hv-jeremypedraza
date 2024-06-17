<script setup>
import { ref } from 'vue';

import WindowContainer from './2d-Level-Component/WindowContainer.vue';



const count = ref(0)
</script>

<template>
 
  <div>
    <WindowContainer />
    <button type="button" class="btn btn-primary">Primary  <i class="bi bi-usb-symbol"></i> </button>
</div>
</template>
