<template>
  <div>
    <div class="row">
      <div class="col-12 col-sm-8">
        <h1><slot></slot></h1>
      </div>
      <div class="col-12 col-sm-4" v-if="searchable">
        <input class="form-control" type="text" placeholder="Search..." style="margin-top: 10px"/>
      </div>
    </div>
    <div class="row"><div class="col-12"><hr/></div></div>
  </div>
</template>

<script>
  export default {
    name: 'h',
    props: {
      searchable: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style>
</style>
