# shopping_cart
本人看了vue官网上的教程后，感觉对vue的依稀有点了解，决定动手练习个小功能项目，就找了购物车本项目。

原文链接：http://blog.csdn.net/take_dream_as_horse/article/details/69942013
就找了这个小项目练习，在原项目的基础上做了如下进一步完善
1.增加了商品数量，合计金额(computed计算属性)
2.修改商品单价合计金额同步变化，增加商品(v-model)，
3.增减商品数量(methods)
4.绑定button class背景，根据商品是否已经加入到购物车，动态显示button背景（就是v-bind:class的实际应用）。
5.删除单列商品(object.splice(index,1))
6.添加商品到商品列(对象浅拷贝用到的是object.assign({},obj),深拷贝var obj = JSON.stringify(this.newProduct);this.goods.push(JSON.parse(obj));//深拷贝)