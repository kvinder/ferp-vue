<template>
  <div class="main-content-inner">
    <breadcrumb page="home"></breadcrumb>
    <div class="page-content">
      <pageheader name="System"></pageheader>
      <div class="row">
        <div class="col-xs-12">
          <div class="row">
            <system nickname="FAMS" fullname="FA Management System" link="/login"></system>
            <system nickname="MTMS" fullname="Material Management System" link="/login"></system>
            <system nickname="IMS" fullname="Inspection Management System" link="/login"></system>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '../components/Breadcrumb'
import Pageheader from '../components/Pageheader'
import System from '../components/System'

export default {
  components: {
    Breadcrumb,
    Pageheader,
    System
  }
}
</script>

