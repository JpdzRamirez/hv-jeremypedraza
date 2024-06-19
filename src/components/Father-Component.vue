<script >
import { ref } from 'vue';

import ChildWindowComponent from './2d-Level-Component/WindowContainer.vue';
import TaskBarComponent from './1rst-Level-Component/TaskBarComponent.vue';

export default {
  name: 'FirstComponent',
  components: {
    ChildWindowComponent,
    TaskBarComponent

  }
}


const count = ref(0)
</script>

<template>
 
  <div class="d-flex flex-column justify-content-center align-items-center">
    <ChildWindowComponent />
    <TaskBarComponent />
    
  </div>
</template>
