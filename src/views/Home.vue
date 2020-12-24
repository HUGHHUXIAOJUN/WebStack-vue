<template>
  <div @click="setAction($event)" class="page-container">
    <div :class="[slider&&'collapsed']" class="sidebar-menu toggle-others fixed">
      <div class="sidebar-menu-inner">
        <header class="logo-env">
          <!-- logo -->
          <div class="logo">
            <a href="#" class="logo-expanded flex">
              <img src="../assets/images/logo.png" alt="" />
              <div class="name">常用网址导航</div>
            </a>
            <a href="#" class="logo-collapsed">
              <img src="../assets/images/logo.png" alt="" />
            </a>
          </div>
          <div class="mobile-menu-toggle visible-xs">
            <a href="#" @click="moble = !moble" data-toggle="user-info-menu">
              <svgIcon name='cog' class="margin-l10" />
            </a>
            <a href="#" @click="slider=!slider" data-toggle="mobile-menu">
              <svgIcon name='bars' class="margin-l10"  />
            </a>
          </div>
        </header>
        <!-- 侧边栏 -->
        <ul id="main-menu" :class="[slider&&'mobile-is-visible']" class="main-menu">
          <li v-for="(menu, idx) in items" :key="idx">
            <a :href="'#' + transName(menu)" class="smooth" @click="moveSlow">
              <svgIcon  :name='menu.icon' class="margin-l10" />
              <span class="title">{{ transName(menu) }}</span>
            </a>
            <ul v-if="menu.children">
              <li v-for="(submenu, idx) in menu.children" :key="idx">
                <a
                  :href="'#' + transName(submenu)"
                  class="smooth"
                  @click="moveSlow"
                >
                  <span class="title">{{ transName(submenu) }}</span>
                  <span
                    v-show="submenu.is_hot"
                    class="label label-pink pull-right hidden-collapsed"
                    >Hot</span
                  >
                </a>
              </li>
            </ul>
          </li>
          <!-- 关于本站 -->
          <li class="submit-tag">
            <router-link to="/about">
              <svgIcon name='heart' class="margin-l10"  />
              <span class="tooltip-blue">关于本站</span>
              <span style="font-size:12px" class="label label-Primary pull-right hidden-collapsed">
                <svgIcon name='aboutme' />
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="main-content">
      <nav
        class="navbar user-info-navbar"
        :class="[moble && 'mobile-is-visible']"
        role="navigation"
      >
        <ul class="user-info-menu left-links list-inline list-unstyled">
          <li @click="slider=!slider" class="hidden-sm hidden-xs">
            <a href="#" data-toggle="sidebar">
              <svgIcon name='bars' />
            </a>
          </li>
          <li
            @click="action = !action"
            :class="[action && 'open']"
            class="dropdown hover-line language-switcher"
          >
            <a href="#" class="dropdown-toggle" ref="a" data-toggle="dropdown">
              <img :src="lang.flag" /> {{ lang.name }}
            </a>
            <ul class="dropdown-menu languages">
              <li
                :class="{ active: langItem.key === lang.key }"
                v-for="langItem in langList"
                :key="langItem.key"
              >
                <a href="#" @click="lang = langItem">
                  <img :src="langItem.flag" /> {{ langItem.name }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="user-info-menu right-links list-inline list-unstyled">
          <li class="hidden-sm hidden-xs">
            <a href="https://github.com/hughhuxiaojun/WebStack-vue" target="_blank">
              <i class="fa-github"></i> GitHub
            </a>
          </li>
        </ul>
      </nav>

      <section class="webList">
        <div v-for="(item, idx) in items" :key="idx">
          <div v-if="item.web">
            <WebItem :item="item" :transName="transName" />
          </div>
          <div v-else v-for="(subItem, idx) in item.children" :key="idx">
            <WebItem :item="subItem" :transName="transName" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </div>
</template>

<script>
import WebItem from "../components/WebItem.vue";
import Footer from "../components/Footer.vue";
import itemsData from "../../public/data.json";

export default {
  name: "Index",
  components: {
    WebItem,
    Footer,
  },
  data() {
    return {
      action: false,
      moble: false,
      slider:false,
      items: itemsData,
      lang: {},
      langList: [
        {
          key: "zh",
          name: "简体中文",
          flag: require("../assets/images/flags/flag-cn.png"),
        },
        {
          key: "en",
          name: "English",
          flag: require("../assets/images/flags/flag-us.png"),
        },
      ],
    };
  },
  mounted() {
    this.lang = this.langList[0];
  },
  methods: {
    transName(webItem) {
      return this.lang.key === "en" ? webItem.en_name : webItem.name;
    },
    setAction(e) {
      e.target != this.$refs.a && (this.action = false);
    },
  },
};
</script>

<style>
.page-container {
  min-height: 100vh;
}
.webList {
  min-height: calc(100vh - 170px);
}
@media screen and (min-width: 400px) {
  .language-switcher:hover .dropdown-menu {
    display: block;
  }
}
.logo a img{
  display: block;
  width: 40px;
  height: 40px;
}
a.logo-collapsed img{
  width: 40px;
}
.flex{
  display: flex;
  align-items: center;
}
.name{
  color: white;
  font-size: 20px;
  margin-left: 20px;
}
</style>
