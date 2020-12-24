# nav

[原设计](https://github.com/WebStackPage/WebStackPage.github.io) 

[vue](https://github.com/Anjaxs/WebStack-vue)版本 

基于[vue](https://github.com/Anjaxs/WebStack-vue)版本的修改
用新版vue 修改 去除所有js的引入 去除nextTick 的操作，css和字体问题太多 修改较少 
data.json 放入pulic 
font.css 已全部移除，改用svg 组件 存放在 assets icons 里面 打包之后会压缩变为一张
 大小通过父级字体来设定，如要改变颜色，你可以下载的时候下载好或者下载之后改svg颜色为currentColor通过父级设定


## data.json
* "name": 标题名,
* "en_name": "英文名",
* "icon": "图标",
* "web": 'web网页
*  web[{url logo title desc}]  建议直接拿网站的 不存本地
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
