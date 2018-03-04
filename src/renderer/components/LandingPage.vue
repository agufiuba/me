<template>
  <div id="wrapper">
    <nav class="navbar navbar-dark bg-warning" style="background-color: #e3f2fd;">
      <a class="navbar-brand" href="#">Navbar</a>
    </nav>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation';

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
      },
    },
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
</style>
