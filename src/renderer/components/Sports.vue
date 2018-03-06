<template>
  <div id="wrapper">
    <nav class="navbar navbar-expand-lg navbar-light bg-warning" style="margin-bottom: 10px">
      <div class="container">
        <a class="navbar-brand" href="#">Me!</a>
        <div class="collapse navbar-collapse">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Passwords<span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link disabled" href="#">Money</a>
            <a class="nav-item nav-link" href="#">Sports</a>
            <a class="nav-item nav-link disabled" href="#">Notes</a>
            <a class="nav-item nav-link disabled" href="#">To Do</a>
            <a class="nav-item nav-link disabled" href="#">Buy</a>
          </div>
        </div>
        <!-- <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        </form> -->
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-8">
          <h1>Sports</h1>
        </div>
        <div class="col-12 col-sm-4">
          <input class="form-control" type="text" placeholder="Search..." style="margin-top: 10px"/>
        </div>
      </div>
      <div class="row"><div class="col-12"><hr/></div></div>
      <div class="row">
        <div class="col-12">
          
        </div>
      </div>
    </div>
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
