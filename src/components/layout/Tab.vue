<template lang="html">
<div class="">

 <transition name="fade">
  <div v-if='isActive'>
    <slot></slot>
    
  </div>
  </transition>

</div>
     
  
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Tab'
    }
  },
  data () {
    return {
      isActive: true
    }
  }
}
</script>
<style scoped>

</style>