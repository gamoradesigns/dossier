<template>
  <div class="about">
    <h1>This is an about page</h1>
  
  </div>
</template>
<script>
export default {

    computed: {
   
        mainAs(){
            console.log(this.$store.state.menuData.mainMenu)
            return this.$store.state.menuData.mainMenu
        }
    }
}
</script>