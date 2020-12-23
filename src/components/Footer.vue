<template>
  <footer class="main-footer sticky footer-type-1">
    <div class="footer-inner">
      <!-- 版权信息 -->
      <div class="footer-text">
        &copy; 2020
        <a href="#"><strong>WebStack</strong></a>
        design by
        <a href="http://viggoz.com" target="_blank"><strong>Viggo</strong></a>
      </div>
      <div id="s-bottom-layer-right" class="s-bottom-layer-right">
        <span class="lh">©2020&nbsp;Baidu&nbsp;</span
        ><span class="lh">(京)-经营性-2017-0020</span
        ><a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001"
          target="_blank"
          ><span class="lh s-bottom-recordcode"
            >京公网安备11000002000001号</span
          ></a
        ><span class="lh">京ICP证030173号</span>
      </div>
    </div>

    <div class="go-up">
      <a href="#" rel="go-top">
        <svg
          t="1608716747369"
          class="icon"
          viewBox="0 0 1025 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1148"
          width="32"
          height="32"
        >
          <path
            d="M553.564 976.027 553.564 148.343l399.46 399.436c16.242 16.241 42.553 16.241 58.794 0 16.242-16.242 16.242-42.553 0-58.794L541.407 18.6c-3.861-3.866-8.493-6.943-13.624-9.056-0.206-0.085-0.42-0.113-0.626-0.195-4.71-1.853-9.802-2.954-15.171-2.954s-10.459 1.101-15.171 2.954c-0.208 0.081-0.42 0.11-0.626 0.195-5.131 2.113-9.763 5.191-13.624 9.056L12.181 488.985c-8.121 8.121-12.181 18.759-12.181 29.397s4.06 21.276 12.181 29.397c16.242 16.241 42.553 16.241 58.794 0l399.433-399.433 0 827.681c0 22.968 18.624 41.578 41.578 41.578S553.564 998.995 553.564 976.027z"
            p-id="1149"
            fill="#8a8a8a"
          ></path>
        </svg>
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
  bottom: 30px;
}

</style>
