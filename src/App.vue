<template>
  <div>
    <div id="navbar" class="navbar navbar-default ace-save-state">
      <headerbar></headerbar>
    </div>
    <div class="main-container ace-save-state" id="main-container">
      <menubar></menubar>
      <div class="main-content">
        <router-view></router-view>
      </div>
      <pagefooter></pagefooter>
    </div>
  </div>
</template>

<script>
import Headerbar from './components/Headerbar'
import Menubar from './components/Menubar'
import Pagefooter from './components/Pagefooter'

export default {
  components: {
    Headerbar,
    Menubar,
    Pagefooter
  }
}
</script>

<style>
@import '../node_modules/foamtec-css/assets/css/bootstrap.min.css';
@import '../node_modules/foamtec-css/assets/font-awesome/4.5.0/css/font-awesome.min.css';
@import '../node_modules/foamtec-css/assets/css/fonts.googleapis.com.css';
@import '../node_modules/foamtec-css/assets/css/ace.min.css';
</style>