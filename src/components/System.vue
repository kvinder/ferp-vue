<template>
  <div class="col-xs-6 col-sm-3 pricing-box">
    <div class="widget-box widget-color-dark">
      <div class="widget-header">
        <h5 class="widget-title bigger lighter">{{ nickname }}</h5>
      </div>

      <div class="widget-body">
        <div class="widget-main">
          <ul class="list-unstyled spaced2">
            <li>
              <i class="ace-icon fa fa-cogs green"></i>{{ fullname }}
            </li>
          </ul>
          <hr />
        </div>

        <div>
          <router-link :to="link" class="btn btn-block btn-inverse">
            <i class="ace-icon fa fa-search-plus bigger-110"></i>
            <span>Join</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    nickname: {
      required: true
    },
    fullname: {
      required: true
    },
    link: {
      required: true
    }
  }
}
</script>

