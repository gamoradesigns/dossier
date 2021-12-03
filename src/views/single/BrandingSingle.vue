<template>
  <div class="">
   <BrandingSingleComp 
   :ogName="ogName"
   ></BrandingSingleComp>
  </div>
</template>
<script>
import BrandingSingleComp from "../../components/single/BrandSingleComp.vue"
export default {
    props:["ogName"],
 components: {
     BrandingSingleComp
 },
 data() {
     return {
      
     }
 }
}
</script>
