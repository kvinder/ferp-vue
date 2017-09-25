<template>
  <div class="breadcrumbs ace-save-state" id="breadcrumbs">
    <ul class="breadcrumb">
      <li>
        <i class="ace-icon fa fa-home home-icon"></i>
        <a href="/">Home</a>
      </li>
      <li class="active">{{ page }}</li>
    </ul>
    <!-- /.breadcrumb -->
  </div>
</template>
<script>
export default {
  props: ['page']
}
</script>
