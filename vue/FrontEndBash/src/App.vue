<template>
  <div id="app">
       <Header></Header>
        <Side></Side>
        <div class="main">
          <router-view/>
        </div>
  </div>
</template>

<script>

import Header from '@/components/Common/backEnd/adminHead'
 import Side from '@/components/Common/backEnd/adminSide'
 
  export default {
     components: {
	    Header,
	    Side
	  },
    name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main{
      position: absolute;
      left: 240px;
      top: 110px;
      bottom: 0;
      right: 0;
  }
</style>
