<template>
  <div class="boxed-container">
    <nav class="navbar horizontal-menu navbar-fixed-top">
      <div class="navbar-inner">
        <div class="navbar-brand">
          <router-link to="/" class="logo">
            <img src="../assets/images/logo.png" width="100%" alt="" class="hidden-xs">
            <img src="../assets/images/logo.png" width="100%" alt="" class="visible-xs">
          </router-link>
        </div>
        <div class="navbar-mobile-clear"></div>
        <a href="https://github.com/hughhuxiaojun/WebStack-vue" target="_blank">
           <img style="position: absolute; top: 0; right: 0; border: 0;"
               src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
               alt="Fork me on GitHub">
        </a>
      </div>
    </nav>

    <div class="page-container">
      <div class="main-content" style="">
        <div class="row">
          <div class="col-md-12">
            <div class="panel panel-default">
              <!-- 关于网站 -->
              <h4 class="text-gray">关于网站</h4>
              <div class="panel-body">
                <div class="row">
                  <div class="col-sm-12">
                    <blockquote>
                      <p>本站设计来源 <a href="https://github.com/WebStackPage/WebStackPage.github.io" target="_blank">Viggo</a> </p>
                      <p>基于vue版本 <a href="https://github.com/Anjaxs/WebStack-vue/tree/master" target="_blank">Anjaxs</a> 的修改 </p>
                      <p>
                        整体就2个页面,适合后期自己修改,我把 Anjaxs 的版本里面的页面和组件直接复制过来修改的 改了路由方式，修复点击多次返回问题
                        <br/>
                        直接去除了原本里面的所有js，添加了一个方法，css不容易区分只删除了2个压缩的文件
                        <br/>
                        data.json放在了public 图片基本都删除了建议直接拿网站的icon地址
                        <br/>
                        html里面的seo部分我也都去了
                        font.css 已全部移除，改用svg 组件 存放在 assets icons 里面 打包之后会压缩变为一张 iconfont上直接下载svg 
                        大小通过父级字体来设定，如要改变颜色，你可以下载的时候下载好或者下载之后改svg颜色为currentColor通过父级设定
                      </p>
                    </blockquote>
                  </div>
                </div>
                <!-- 关于站长 -->
                <h4 class="text-gray">关于站长</h4>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="xe-widget xe-conversations box2 label-info"
                         onclick="window.open('https://github.com/hughhuxiaojun', '_blank')"
                         data-toggle="tooltip"
                         data-placement="bottom"
                         title=""
                         data-original-title="https://github.com/hughhuxiaojun">
                      <div class="xe-comment-entry">
                        <a class="xe-user-img">
                          <img src="https://q.huxiaojun.work/favicon.png" class="img-circle" width="40">
                        </a>
                        <div class="xe-comment">
                          <a href="#" class="xe-user-name overflowClip_1">
                            <strong>CVgcs. Hugh.</strong>
                          </a>
                          <p class="overflowClip_2"> 你说我们喜欢的是创作,还是代码本身</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="row">
                      <div class="col-sm-12">
                        <br />
                        <blockquote>
                          <p>
                            这是一个开源的项目<iframe src="https://ghbtns.com/github-btn.html?user=HUGHHUXIAOJUN&repo=WebStack-vue&type=star&count=true" frameborder="0" scrolling="0" width="80px" height="20px"></iframe> 。
                                    你也可以拿来制作自己的网址导航。如果你有更好的想法，可以与我交流分享,联系不到就算了。
                          </p>
                        </blockquote>
                      </div>
                    </div>
                    <br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'

export default {
  name: 'About',
  components: {
    Footer
  }
}
</script>

<style>
.navbar-brand a img{
    min-width: 40px;
}
</style>
