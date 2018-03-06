<template>
  <div id="app">
    <navbar></navbar>
    <passwords></passwords>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import Passwords from './components/Passwords'

  export default {
    name: 'my-project',
    components: {
      Navbar,
      Passwords
    }
  };
</script>

<style lang="scss">
  @import '../custom'
</style>
