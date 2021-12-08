<template>
    <div>
    <ul class='tabs__header'>
    <li v-for='(tab, index) in tabs' :key='tab.title' @click='selectTab(index)'
     :class='{"tabs__selected": (index == selectedIndex)}'>
        {{ tab.title }}
</li>
    </ul>

      <slot></slot>

    
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: [],        // all of the tabs
    }
  },
  created () {
    this.tabs = this.$children
},
mounted () {
    this.selectTab(0)
},
methods: {
    selectTab (i) {
      this.selectedIndex = i
      
      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
      })
    }
 }
}
</script>
<style >
ul.tabs__header li {
  color: #b7b7b7;
  transition: all .5s;
}
ul.tabs__header li:hover {
  color: white;
  font-size: .92rem;
  letter-spacing: 2.2px;
}
.tabs__selected {
  color: white !important;
}
</style>