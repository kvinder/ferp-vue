<template>
  <div id="sidebar" class="sidebar responsive ace-save-state">
    <div class="sidebar-shortcuts" id="sidebar-shortcuts">
      <div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
        <button class="btn btn-success">
          <i class="ace-icon fa fa-signal"></i>
        </button>

        <button class="btn btn-info">
          <i class="ace-icon fa fa-pencil"></i>
        </button>

        <button class="btn btn-warning">
          <i class="ace-icon fa fa-users"></i>
        </button>

        <button class="btn btn-danger">
          <i class="ace-icon fa fa-cogs"></i>
        </button>
      </div>

      <div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
        <span class="btn btn-success"></span>

        <span class="btn btn-info"></span>

        <span class="btn btn-warning"></span>

        <span class="btn btn-danger"></span>
      </div>
    </div>
    <ul class="nav nav-list">
      <router-link tag="li" to="/" active-class="active" exact>
        <a href="#">
          <i class="menu-icon fa fa-home home-icon"></i>
          <span class="menu-text">Home</span>
        </a>

        <b class="arrow"></b>
      </router-link>

      <li>
        <a href="#" class="dropdown-toggle">
          <i class="menu-icon fa fa-list"></i>
          <span class="menu-text"> IMS </span>

          <b class="arrow fa fa-angle-down"></b>
        </a>
        <b class="arrow"></b>

        <ul class="submenu">
          <router-link tag="li" to="/ims" active-class="active" exact>
            <a href="#">
              <i class="menu-icon fa fa-caret-right"></i> IMS Dashboard
            </a>

            <b class="arrow"></b>
          </router-link>

          <li>
            <a href="/ims/createmasterii">
              <i class="menu-icon fa fa-caret-right"></i> Create Master II
            </a>

            <b class="arrow"></b>
          </li>
        </ul>
      </li>
    </ul>
    <div class="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
      <i id="sidebar-toggle-icon" class="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
