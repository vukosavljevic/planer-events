<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/UI/TheHeader.vue';
export default {
  components: {
    TheHeader
  }
}
</script>
<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a{
  text-decoration: none;
  color: #2c3e50;
  font-size: 2rem;
}
a:hover{
  font-size: 1.5rem;
  font-weight: bold;
  transition: 0.3s ease;
  transform:rotate(15deg)
}
</style>
