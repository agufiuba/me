<template>
  <div id="app">
    <navbar></navbar>
    <!-- <passwords></passwords> -->
    <money></money>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import Passwords from './components/Passwords'
  import Money from './components/Money'

  export default {
    name: 'my-project',
    components: {
      Navbar,
      Passwords,
      Money
    }
  };
</script>

<style lang="scss">
  @import '../custom'
</style>
