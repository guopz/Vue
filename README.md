# Vue
Vue 学习组件
主要是介绍 component vue-router 使用以及vue的一些知识点。\<br>  
页面demo采用的是挂载 vue.js 的方式使用的版本

1. Vue.js `v2.3.0`
2. Vue-router `v2.6.0`

浏览地址 https://guopz.github.io/Vue/interView/#/cours\<br>  
效果截图\<br>  
![效果图片](https://github.com/guopz/Vue/blob/master/interView/GIF.gif)\<br>  
喜欢的朋友可以 star 下，谢了。

### vue component
Vue 的组件分两种形式 即 **全局组件** 和 **局部组件**
使用组件分3步 - 全局组件
>1. 创建组件的构造器
2. 注册组件
3. 使用组件

Vue 1.X 组件构建
```
1.创建一个组件构造器
var myComponent = Vue.extend({
    template: '<div>This is my first component!</div>'
})
2.注册组件并制定组件 名称(大写字母用-分开)
Vue.component('my-component', myComponent);
3.使用组件 **组件需挂载到实例下生效**
Vue({
    el:"#app"
})
```

Vue 2.x 的语法糖 
```
创建并注册，非常方便 
全局注册的方式 在vue对象中不必再次注册
Vue.component('my-component', {
  // 选项
})
```
局部组件
```
new Vue({
    el: '#app',
    components: {
        // 将myComponent组件注册到Vue实例下
        'my-component' : myComponent
    }
});
2. 也可以直接传入一个对象
new Vue({
    el: '#app',
    components: {
        // 2. 将myComponent组件注册到Vue实例下
        'my-component' : {
            template:'<div>测试</div>'
        }
    }
});
```
递归组件 - 通过使用name 
```
var iview = Vue.extend({
  name: 'iview',
  template:
    '<div>' +
      // 递归地调用它自己
      '<iview></iview>' +
    '</div>'
})
```

##### vue-Router
js部分
定义一个路由分4部；
1. 定义一个组件
```
var Foo = {
	template:'<div>我是 Foo</div>'
};
var Bar = {
	template:'<div>我是 Bar</div>',
	name:'bar1'
};
```
2. 定义一个路由
```
var routes = [
	{ path: '/', redirect:'/foo' },
	{ path: '/foo', component: Foo,
		children: [
	        // 这也是个 route record
	       { path: 'bar', component: Bar }
	      ]
	},
	{ path: '/bar/:name', component: Bar }
];
```	
3. 创建一个 routers 实例
```
var router = new VueRouter({
	routes: routes
});
```
4. 挂载到实例上
```
var vm = new Vue({
	el:'#app',
	router:router
});
```

##### 常见问题:
>1. 在 js 部分组件的变量名称可以是驼峰写法，也可以是 加中划线写法（没有特别规定），`但是在 html 部分中，不存在驼峰写法`，需添加`中划线`替代
>2. v-show 与 v-if 的区别；
>    -  当我们频繁切换页面的显隐是我们可以使用 `v-show` ， 它的元素始终在被渲染并保存在dom中，而 `v-if` 是条件渲染，当元素为false 时， 元素不存在也不会被渲染;
>     - 一般来说 `v-if `有更高的切换开销，而 `v-show` 有更高的渲染开销，
>    - 使用场景就是，`v-if` 在做数据渲染时，判断属性的存在；`v-show `例如 在做 tab 切换