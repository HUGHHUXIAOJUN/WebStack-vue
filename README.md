# nav

<p>>
    [原设计](https://github.com/WebStackPage/WebStackPage.github.io){:target="_blank"}
    基于[vue](https://github.com/Anjaxs/WebStack-vue){:target="_blank"}版本的修改
    用新版vue 修改 去除所有js的引入 去除nextTick 的操作，css和字体问题太多 修改较少 
    data.json 放入pulic 打包之后可以直接修改 方便操作
</p>

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
