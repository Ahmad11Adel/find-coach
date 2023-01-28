<template>
  <div class="con">
    <the-header></the-header>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
    

</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheFooter from './components/layouts/TheFooter.vue'
export default {
    components:{
        TheHeader,
        TheFooter 
    },
    created(){
        this.$store.dispatch('tryAgain')
      }
   
    
}
</script>







<style >
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
  
  
}

html {
  font-family: "Roboto", sans-serif;
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
  
}
.con{
  background-image: url(./images/img2.png);
  position: relative;
  min-height: 280vh ;
  width: 100%;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}
</style>