<template>
  <div class="">
    <h1>Template</h1>
<div> 
 title:

    
</div>

<div> 
    space 1
    h1:  
h2:

</div>
<div> 
    space 2
    h1:  
h2:

</div>

  <router-link
            class="linkClass"
            :to="{
              name: 'BrandingMenu',
              params: {
                  name: 'HERE IS MY NAME'
              }
            
            }"
          >
          go to brading  main menu 

<div> 
    {{mainAs }}
<!-- {{ mainAs[0].H1}}
{{ mainAs[0].H2}}
{{ mainAs[0].S1}} -->

</div>
          
</router-link>
  </div>
</template>
<script>
export default {
    computed: {
   
        mainAs(){
            console.log(this.$store.state)
            return this.$store.state
        }
    }
}
</script>
