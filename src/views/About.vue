<template>
  <div class="boxed-container">
    <nav class="navbar horizontal-menu navbar-fixed-top">
      <div class="navbar-inner">
        <div class="navbar-brand">
          <router-link to="/" class="logo">
            <img src="../assets/images/logo_dark@2x.png" width="100%" alt="" class="hidden-xs">
            <img src="../assets/images/logo@2x.png" width="100%" alt="" class="visible-xs">
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
                        整体就2个页面,适合后期自己修改,我把 Anjaxs 的版本里面的页面和组件直接复制过来修改的
                        <br/>
                        直接去除了原本里面的所有js，添加了一个方法，css不容易区分只删除了2个压缩的文件
                        <br/>
                        data.json放在了public 图片基本都删除了建议直接拿网站的icon地址
                        <br/>
                        html里面的seo部分我也都去了
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
                          <img :src="authorImg" class="img-circle" width="40">
                        </a>
                        <div class="xe-comment">
                          <a href="#" class="xe-user-name overflowClip_1">
                            <strong>CVgcs. Hugh.</strong>
                          </a>
                          <p class="overflowClip_2"> 你是说我们喜欢的是创作,还是代码本身</p>
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
                            这是一个公益项目，而且是<a href="https://github.com/HUGHHUXIAOJUN/WebStack-vue"> 开源 </a>
                            <iframe src="https://ghbtns.com/github-btn.html?user=HUGHHUXIAOJUN&repo=WebStack-vue&type=star&count=true"
                                    frameborder="0" scrolling="0" width="80px" height="20px"></iframe> 的。
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
  },
  data() {
    return {
      authorImg: require('../assets/images/favicon.png')
    }
  }
}
</script>

<style>
.navbar-brand a img{
    min-width: 178px;
}
</style>
