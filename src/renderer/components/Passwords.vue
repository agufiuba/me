<template>
  <div class="container">
    <h searchable>Passwords</h>
    <div class="row"><div class="col-12"><hr/></div></div>
    <div class="row">
      <div class="col"><input class="form-control" placeholder="Domain"/></div>
      <div class="col"><input class="form-control" placeholder="User"/></div>
      <div class="col"><input class="form-control" placeholder="Mail"/></div>
      <div class="col"><input class="form-control" placeholder="Password" type="password"/></div>
      <div class="col"><button class="btn btn-outline-primary col-12">Insert</button></div>
    </div>
    <div class="row"><div class="col-12"><hr/></div></div>
    <div class="row">
      <div class="col-12">
        <table class="table table-hover">
          <thead>
            <tr class="d-flex">
              <th class="col-2">Domain</th>
              <th class="col-4">User</th>
              <th class="col-3">Mail</th>
              <th class="col-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="d-flex">
              <th class="col-2"scope="row">Google</th>
              <td class="col-4">agugaillard@gmail.com</td>
              <td class="col-3"></td>
              <td class="col-3 text-right"><button class="btn btn-link">Update</button> <button class="btn btn-outline-danger">Remove</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <h1>{{ w }}</h1>
  </div>
</template>

<script>
  import H from './H'
  import {db} from '../firebase'

  let a = db.ref('w').once('value').then(function(snapshot) {
    console.log(snapshot)
  });
  console.log(a)

  export default {
    name: 'passwords',
    components: {
      H
    },
    data() {
      return {
        w: {}
      }
    },
    firebase: {
      w: {
        source: a,
        // Optional, allows you to handle any errors.
        cancelCallback(err) {
          console.error(err);
        }
      }
    }
  }
</script>
