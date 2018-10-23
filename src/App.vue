<template>
  <div id="app">
    <navigator></navigator>
    <main class="my-5 py-5">
      <router-view></router-view>
    </main>
    <ekfooter></ekfooter>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator'
import Ekfooter from '@/components/Ekfooter'
export default {
  name: 'app',
  components: {
    Navigator,
    Ekfooter
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a{
  text-decoration: none !important;
}

</style>
