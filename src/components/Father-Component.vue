<script >
import { ref } from 'vue';

import WindowComponent from './2d-Level-Component/WindowContainer.vue';
import TaskBarComponent from './1rst-Level-Component/TaskBarComponent.vue';

export default {
  name: 'FatherComponent',
  components: {
    WindowComponent,
    TaskBarComponent

  },
   methods:{
    handleUpdateStyleCard(data){
      this.styleCard = data;
    }
   },
   data() {
    return {
      styleCard: 'dark'
    }
  },

}


const count = ref(0)
</script>

<template>
 <button type="button" class="btn btn-primary">Primary {{ styleCard }}</button>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <WindowComponent @updatestyleCard="handleUpdateStyleCard" />
    <TaskBarComponent :receivedData="styleCard" />
  </div>
</template>
