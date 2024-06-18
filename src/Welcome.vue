<script >
import FatherComponent from './components/Father-Component.vue'


export default {
  name: 'ParentComponent',
  components: {
    FatherComponent
  }
}

</script>

<template>
  <FatherComponent />
</template>

<style lang="scss" scoped>

</style>
