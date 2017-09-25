<template>
  <div class="navbar-container ace-save-state" id="navbar-container">
    <button type="button" class="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
      <span class="sr-only">Toggle sidebar</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <div class="navbar-header pull-left">
      <router-link to="/" class="navbar-brand">
        <small>
          <i class="fa fa-leaf"></i>
          FOAMTEC
        </small>
      </router-link>
    </div>
    <div class="navbar-buttons navbar-header pull-right" role="navigation">
      <ul class="nav ace-nav">
        <li class="light-blue">
          <a data-toggle="dropdown" href="#" class="dropdown-toggle">
            <img class="nav-user-photo" src="/static/images/avatar2.png" alt="Jason's Photo" />
            <span class="user-info">
              <small>Welcome,</small>
            </span>
            <i class="ace-icon fa fa-caret-down"></i>
          </a>
          <ul class="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
            <li>
              <router-link v-if="!userLogin" to="/login">
                Login
              </router-link>
              <a v-if="userLogin" href="#" @click="logout">
                Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    userLogin: null
  }),
  methods: {
    logout () {
      console.log('logout')
    }
  }
}
</script>
