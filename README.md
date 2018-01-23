#shopping_cart

本人看了vue官网上的教程后，打算对vue深入了解，决定动手练习个小功能项目，就找了购物车本项目。

原文链接：http://blog.csdn.net/take_dream_as_horse/article/details/69942013 就找了这个小项目练习，在原项目的基础上做了如下进一步完善 
1.在footer部分增加了合计数量 件 合计金额 元 || 购物车 件 花费 元(computed计算属性) 
2.修改商品单价合计金额变化，修改商品信息(v-model)， 
3.增减商品数量(methods) 
4.绑定button class背景，根据商品是否已经加入到购物车，动态显示button背景（就是v-bind:class的实际应用）。 
5.添加单列商品(对象浅拷贝或者一层深拷贝用到的是object.assign({},obj),深拷贝var obj = JSON.stringify(this.newProduct);this.goods.push(JSON.parse(obj));//深拷贝) 
6.删除单列商品,删除全部商品(object.splice(index,1)) 
7.删除结算时增加动态模态框特效
7.增加分类查询功能，已加入、未加入、全部;用到的是Vue 通过$ref直接对DOM操作
8.对IE9+支持，去掉ES6的箭头函数
浏览demo地址：https://double2018.github.io/shopping_cart/shopping_cart.html
