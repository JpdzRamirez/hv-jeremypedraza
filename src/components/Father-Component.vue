<script >
import { ref } from 'vue';

import ChildWindowComponent from './2d-Level-Component/WindowContainer.vue';

export default {
  name: 'FirstComponent',
  components: {
    ChildWindowComponent
  }
}


const count = ref(0)
</script>

<template>
 
  <div>
    <ChildWindowComponent />
    <button type="button" class="btn btn-primary">Primary  <i class="bi bi-usb-symbol"></i> </button>
</div>
</template>
