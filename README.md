# Vue或React多页应用脚手架

---
## 前言

> 一直以来都在研究多页应用如何能有一套像SPA一样优雅的开发模式

> 本套架构在项目上使用感觉还不错（已跑在上百个页面的项目上），所以决定开源出来给大家

> 阅读完本文能实现在项目中使用ES6(7)+组件化（.vue | .jsx）开发多页应用

> (其实我是想把它做为大家多页应用的脚手架)

## 目录结构介绍

> TIPS：任何的项目的架构都和目录结构有关，所以这部分非常重要，请仔细耐心阅读

我们先宏观的看下结构

```js
|--- public // 生产环境下所需的文件
    |--- static
        |--- css
        |--- es6
        |--- fonts
        |--- images
    |--- views
|--- src
    |--- assets
        |--- fonts
        |--- images
    |--- components
    |--- js
    |--- sass
    |--- static
        |--- css
        |--- es6
        |--- fonts
        |--- images
    |--- views
```

`src`里的`assets,components,js,sass`里的文件最后都会生成到`src/static`下，这个作为我们dev中引用的资源文件。而`public`不用说，是线上访问的文件。

---

我们展开介绍下具体的页面应该如何对应它的资源。拿`js`和`views`为例

```js
|--- views
    |--- home // 官网介绍 业务模块
        |--- index.html
        ...
    |--- shopping // 购物业务模块
        |--- buy.html
        ...
|--- js
    |--- lib
        |--- vue.js
        |--- react.js
        |--- react.dom.js
        ...
    |--- home // 官网介绍业务模块的js
        |--- index.js
        ...
    |--- shopping // 购物业务模块的js
        |--- buy.js
        ...
    tools.js
    common.js
```

在多页应用中，往往我们的页面以业务模块划分，业务模块由许多的页面组成。
如`home，shopping`，可能就分别为官网介绍和购物的业务模块。在这业务模块下，分别有许多个页面，那我们的js文件也需要命名一一对应。

当然，我们还有第三方的js库是不需要编译的，所以我们专门用一个`lib`文件夹来存放他们。(包括你自己编写的指令或者filter等，不需要编译的，也直接放在lib下引入即可)

另外，你还有许多自己写的需要编译的工具库直接放在`js`目录下即可(如，tools.js,common.js)

---

我们的sass也是同理

```js
|--- sass
    |--- home
        |--- index.scss
        ...
    |--- shopping
        |--- buy.scss
        ...
```

他们编译在`static`下的文件将为

```js
|--- static
    |--- css // scss 编译后的
        |--- home
            |--- index.css
        |--- shopping
            |--- buy.css
    |--- js // babel处理后的js
        |--- home
            |--- index.js
        |--- shopping
            |--- buy.js
```

页面引用的路径就为(home/index.html为例)

```js
...
<link rel="stylesheet" href="../../static/css/home/index.css">

...

<script src="../../static/es6/lib/vue(react).js"></script>
<script src="../../static/es6/lib/react.dom.js"></script>
<script src="../../static/es6/home/index.js"></script>
...
```

---

js和sass搞定了后，我们的难点是编写组件的过程中，如何知道应该编译哪个入口js文件呢？
所以我们需要对我们的组件名进行一些约定，这也就是约定大于配置的前提。

```js
|--- components
    |--- home // home 业务模块
        |--- home-header.vue(jsx)
        |--- index-info.vue(jsx)
        ...
    |--- shopping  // shopping 业务模块
        |--- buy-list.vue(jsx)
        ...
```

我们`components`下的业务模块名和之前的sass，js一样。具体组件那就有所不同。

我们分为几种类型的组件
> *  一、当前页面使用的组件
> *  二、当前业务模块下的公用组件
> *  三、所有业务模块的通用组件

当前页面组件的命名，我们约定为  `[页面]-[组件].vue(jsx)`

如下
```js
|--- components
    |--- home
        |--- index-info.vue(jsx)
```
这个`index-info`的组件就仅仅只有在`home/index.html`页面下使用，当你修改了这个组件后，会自动编译`home/index.js`路口js文件并刷新页面。


当前业务模块下的公用组件，我们约定为 `[业务模块]-[组件].vue(jsx)`

如下
```js
|--- components
    |--- home
        |--- home-header.vue(jsx)
```

这个`home-header`组件就属于`home`业务模块下的公用组件，当你修改了这个组件后，会自动编译`home`业务模块下所有的js文件并刷新页面。

剩下的就是所有业务模块下的通用组件，我们约定全放在`components/common`目录下，不需要具体命名约定

```js
|--- components
    |--- common
        |--- loading.vue(jsx)
```
这个`loading`组件就属于所有业务模块下的公用组件，当你修改了这个组件后，会自动编译所有业务模块下的js文件并刷新页面。

编译组件的原理以及为什么约定命名的原因是：

> 我会根据组件更改变动，去读取文件夹名，组件名，并编译对应名的路口js

至此，我们就把组件的问题也解决了

由于我采用的是主gulp辅webpack，webpack仅仅只编译用，所以编译基本达到秒编译。比单纯利用webpack做构建快得多。如果单纯采用webpack做构建，需要去配置entry，配置HTMLPlugin。所以会慢得多，然而我这一套并不需要如此繁琐。

## 图片&&字体文件

> 这其实是一个大坑

我们的实现目标是**组件能相对路径引入图片或字体文件**

```js
// 如 在html标签里这样
<template>
	<figure>
		<img src="../../assets/images/home/logo.jpg" alt="头像">
	</figure>
</template>

// 在style里这样
<style rel="stylesheet/scss" lang="sass">
	@import "../../sass/home/index-info";
	// 甚至可能在这@import面引入相对路径，这都会算是在组件里引入相对路径
    #bg h3 {
		background: url("../../assets/images/holmes.jpg");
		color: #fff;
	}
</style>
```

这个坑，真是**不可描述**，我个人尝试了各种体位，才把这个坑配置好。

直接给大家看最后实现是怎样的。

> `dev` 的路径是这样，页面可以显示图片或字体。

![](http://7xt8eu.com1.z0.glb.clouddn.com/multpage-5.png)

>`build` 后的路径是这样

![](http://7xt8eu.com1.z0.glb.clouddn.com/mulupage-6.png)

这样就达到了开发和发布后的资源统一，摸索这一步真是挺累的 T.T，有兴趣的自己看源码吧。

## 环境变量的配置

> 我们在webpack中经常会遇见不同环境下不同配置的问题

首先可在`package.json`里配置一条`script`

```js
// package.json
"scripts": {
    "build": "NODE_ENV=production gulp build",
    "dev": "NODE_ENV=dev gulp reload"
},
```

假设我们需要为不同环境配置不同的api请求地址,就可以利用我们在`package.json`设置的`NODE_ENV`来识别当前环境(这部分我在gulpfile中处理了，所以在文件里可直接识别NODE_ENV，如下)

```js
//  src/js/ajaxurl.js
 
const server1 = 'https://production.server.com';
const server2 = 'https://dev.server.com';

let useServer = null;
if(NODE_ENV === 'production') {
	useServer = server1;
} else if(NODE_ENV === 'dev') {
	useServer = server2;
}

export default useServer;
```

```js
// src/js/home/index.js

import url from '../ajaxurl';
console.log(url);
```

这样就解决了我们不同环境下不同配置的问题，我默认配置了`dev`和`production`，大家可以自行拓展。比如

假设你需要在 **开发中** 配置测试，你可以写一条`NODE_ENV=test gulp reload`。

如果需要 **预发布打包** 测试，就可以另一条`NODE_ENV=preproduction gulp build`。

总之就是打包使用`gulp build`，开发使用`gulp reload`。

## 注意事项

开发：执行命令 `npm run dev`
发布：执行命令 `npm run build` (BTW，别忘了去`gulpfile.js`里替换你的CDN链接，进入gulp文件修改 const CDN = 'yourCDNLink'这里的变量即可) 

命名一定要按约定来！
命名一定要按约定来！
命名一定要按约定来！

否则不知道要编译谁！！！

gulp配置很简单，大家可以看一下针对各自项目进行修改，不懂得可以直接问我。

如果你们不完全的前后端分离，把这个src直接放在后台目录下也没有问题。

写vue和react都没问题，我把示例demo都写好了，下面是分别两个的repo地址。

vue-multpage : [https://github.com/MeCKodo/vue-multipage](https://github.com/MeCKodo/vue-multipage)

react-multpage : [https://github.com/MeCKodo/react-multipage](https://github.com/MeCKodo/react-multipage)

## TODO

- [ ] 项目的Unit test
- [ ] 项目Cli脚手架


## 后话

本来是想写成`vue-cli`或者是`create-react-app`这种cli脚手架的，但是！本人真是太懒又没有时间了！ 各位看官可以先尝试clone把玩把玩，如果有足够多人喜欢，我就把他写成cli，发布npm :)

我是用mac下开发完成的，用了半天多时间专门去给window写了兼容，window还可能会有bug，不是我说！**window就是辣鸡！**

最后给大家看下我们的某项目结构。

---

**总览**
![总览](http://7xt8eu.com1.z0.glb.clouddn.com/multpage-4.png)

**js部分**
![js部分](http://7xt8eu.com1.z0.glb.clouddn.com/multpage-1.png)

**sass部分**
![sass部分](http://7xt8eu.com1.z0.glb.clouddn.com/multpage-2.png)

**组件和页面**
![组件和页面](http://7xt8eu.com1.z0.glb.clouddn.com/multpage-3.png)


---
Have a nice day
