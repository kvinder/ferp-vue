<template>
  <div class="main-content-inner">
    <breadcrumb page="login"></breadcrumb>
    <div class="page-content">
      <pageheader name="Login"></pageheader>
      <div class="row">
        <div class="col-xs-12">
          <div class="row">
            <div class="col-sm-5">
              <div class="widget-box">
                <div class="widget-header center">
                  <h4 class="widget-title">
                    <i class="ace-icon fa fa-key green"></i> Please Login
                  </h4>
                </div>

                <div class="widget-body">
                  <div class="widget-main no-padding">
                    <form class="form-horizontal" method="POST">
                      <fieldset>
                        <div class="form-group">
                          <label class="col-sm-3 control-label no-padding-right" for="form-field-username"> Username </label>
                          <div class="col-sm-9">
                            <input type="text" id="form-field-username" name="form-field-username" placeholder="Username" class="form-control" required />
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-sm-3 control-label no-padding-right" for="form-field-password"> Password </label>
                          <div class="col-sm-9">
                            <input type="password" id="form-field-password" name="form-field-password" placeholder="Password" class="form-control" required />
                          </div>
                        </div>
                      </fieldset>

                      <div class="form-actions center">
                        <button type="submit" class="btn btn-sm btn-success">
                          Login
                          <i class="ace-icon fa fa-unlock icon-on-right bigger-110"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '../components/Breadcrumb'

export default {
  components: {
    Breadcrumb
  },
  mounted () {
    $('#form-field-username').focus()
  }
}
</script>
