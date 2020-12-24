<template>
  <footer class="main-footer sticky footer-type-1">
    <div class="footer-inner">
      <!-- 版权信息 -->
      <div class="footer-text">
        <a href="https://github.com/WebStackPage/WebStackPage.github.io" target="_blank"><strong>WebStack</strong></a>
        design by
        <a href="http://viggoz.com" target="_blank"><strong>Viggo</strong></a>
      </div>
      <div id="s-bottom-layer-right" class="s-bottom-layer-right">
        <span class="lh"> &copy;2020&nbsp;Hugh&nbsp;</span
        ><span class="lh"></span
        ><a
          href="http://www.beian.gov.cn/portal/index.do"
          target="_blank"
          ><span class="lh s-bottom-recordcode"
            >苏ICP备19006293号</span
          ></a
        ><span class="lh"></span>
      </div>
    </div>

    <div class="go-up">
      <a href="#" style="color:#8a8a8a;" rel="go-top">
        <svgIcon  name='goTop' />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.s-bottom-layer-right {
  float: right;
}
.go-up {
  position: fixed;
  right: 20px;
  bottom: 50px;
  font-size: 40px;
}
@media screen and (max-width: 600px){
  .footer-text{
    float: none;
    margin-right: 20px;
  }
  .s-bottom-layer-right {
    float: none;
  }
}

</style>
