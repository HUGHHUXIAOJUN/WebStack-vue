<template>
  <div @click="setAction($event)" class="page-container">
    <div class="sidebar-menu toggle-others fixed">
      <div class="sidebar-menu-inner">
        <header class="logo-env">
          <!-- logo -->
          <div class="logo">
            <a href="#" class="logo-expanded">
              <img src="../assets/images/logo@2x.png" alt="" />
            </a>
            <a href="#" class="logo-collapsed">
              <img src="../assets/images/logo-collapsed@2x.png" alt="" />
            </a>
          </div>
          <div class="mobile-menu-toggle visible-xs">
            <a href="#" @click="moble = !moble" data-toggle="user-info-menu">
              <i class="linecons-cog"></i>
            </a>
            <a href="#" data-toggle="mobile-menu">
              <i class="fa-bars"></i>
            </a>
          </div>
        </header>
        <!-- 侧边栏 -->
        <ul id="main-menu" class="main-menu">
          <li v-for="(menu, idx) in items" :key="idx">
            <a :href="'#' + transName(menu)" class="smooth" @click="moveSlow">
              <i :class="menu.icon"></i>
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
              <i class="linecons-heart"></i>
              <span class="tooltip-blue">关于本站</span>
              <span class="label label-Primary pull-right hidden-collapsed"
                >♥︎</span
              >
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
          <li class="hidden-sm hidden-xs">
            <a href="#" data-toggle="sidebar"><i class="fa-bars"></i></a>
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
            <a href="https://github.com/Anjaxs/WebStack-vue" target="_blank">
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
  min-height: calc(100vh - 200px);
}
@media screen and (min-width: 400px) {
  .language-switcher:hover .dropdown-menu {
    display: block;
  }
}
.logo a {
  display: block;
  width: 178px;
}
</style>
