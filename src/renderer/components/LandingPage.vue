<template>
  <div id="wrapper">
    <nav class="navbar navbar-light bg-warning" style="margin-bottom: 10px">
      <div class="container">
        <a class="navbar-brand" href="#">Me!</a>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-8">
          <h1>Passwords</h1>
        </div>
        <div class="col-12 col-sm-4">
          <input class="form-control" type="text" placeholder="Buscar..." style="margin-top: 10px"/>
        </div>
      </div>
      <div class="row"><div class="col-12"><hr/></div></div>
      <div class="row">
        <div class="col-12">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Domain</th>
                <th scope="col">User</th>
                <th scope="col">Mail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Google</th>
                <td>agugaillard@gmail.com</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Amazon</th>
                <td>agugaillard@gmail.com</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Steam</th>
                <td>agugaillard</td>
                <td>agugaillard@gmail.com</td>
              </tr>
            </tbody>
          </table>
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
